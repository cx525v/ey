using System.Collections.Generic;
using DoctorApp.Model;
using DoctorApp.Services.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DoctorApp.Controllers
{
    [EnableCors("DefaultPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorService _srv;
        public DoctorController(IDoctorService srv)
        {
            _srv = srv;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Doctor>> GetDoctorList()
        {         
            return Ok(_srv.GetDoctorList());              
        }

        [Route("{Id}")]
        [HttpGet]
        public ActionResult<Doctor> GetDoctorDetail(int Id)
        {
            return Ok(_srv.GetDoctorDetails(Id));
        }

    }
}