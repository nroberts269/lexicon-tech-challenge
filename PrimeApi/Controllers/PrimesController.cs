using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using PrimeApi.Models;

namespace PrimeApi.Controllers
{
    [RoutePrefix("api/primes")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PrimesController : ApiController
    {
        private static readonly IDictionary<int, bool> primeCache = new Dictionary<int, bool>();

        [HttpGet, Route("check/{value:int}")]
        public async Task<IHttpActionResult> IsPrime(int value)
        {
            return Ok(await Task.Run(() =>
            {
                // Is value is cache?
                if (!primeCache.ContainsKey(value))
                {
                    // Determine if a prime number
                    var isPrime = true;
                    for (var j = 2; j < value; j++)
                    {
                        if (value % j != 0) continue;
                        isPrime = false;
                        break;
                    }
                    // Put value in cache
                    primeCache[value] = isPrime;
                }
                return new PrimeModel
                {
                    Value = value,
                    IsPrime = primeCache[value]
                };
            }));
        }
    }
}
