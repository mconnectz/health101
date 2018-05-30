const express = require('express');
const router = express.Router();

const auth = require('./controllers/auth');
const doctor = require('./controllers/doctor');
const hospital = require('./controllers/hospital');
const hAdmin = require('./controllers/hospital_admin');
const lab = require('./controllers/lab');
const lAdmin = require('./controllers/lab_admin');
const labAssist = require('./controllers/lab_assist');
const patient = require('./controllers/patient');
const pharm = require('./controllers/pharm');
const pAdmin = require('./controllers/pharm_admin');
const pharmAssist = require('./controllers/pharm_assist');
const sAdmin = require('./controllers/super_admin');

router.post('/register',auth.register);
router.post('/login',auth.login);

router.post('/admin/lab',auth.Ladmin,lAdmin.insert);
router.put('/admin/lab/:id',auth.Ladmin,lAdmin.update);
router.delete('/admin/lab/:id',auth.Ladmin,lAdmin.remove);
router.get('/admin/lab/:id',auth.Ladmin,lAdmin.get);
router.get('/admin/lab',auth.Ladmin,lAdmin.getAll);
router.get('/admin/lab/count',auth.Ladmin,lAdmin.count);
router.post('/admin/lab/search',auth.Ladmin,lAdmin.search);

router.post('/assist/lab',auth.LabAssist,lab.insert);
router.put('/assist/lab/:id',auth.LabAssist,lab.update);
router.delete('/assist/lab/:id',auth.LabAssist,lab.remove);
router.get('/assist/lab/:id',auth.LabAssist,lab.get);
router.get('/assist/lab',auth.LabAssist,lab.getAll);
router.get('/assist/lab/count',auth.LabAssist,lab.count);
router.post('/assist/lab/search',auth.LabAssist,lab.search);

router.post('/lab',auth.Lab,lab.insert);
router.put('/lab/:id',auth.Lab,lab.update);
router.delete('/lab/:id',auth.Lab,lab.remove);
router.get('/lab/:id',auth.Lab,lab.get);
router.get('/lab',auth.Lab,lab.getAll);
router.get('/lab/count',auth.lab,lab.count);
router.post('/lab/search',auth.lab,lab.search);

router.post('/admin/hospital',hAdmin.insert);
router.put('/admin/hospital/:id',hAdmin.update);
router.delete('/admin/hospital/:id',hAdmin.remove);
router.get('/admin/hospital/:id',hAdmin.get);
router.get('/admin/hospital',hAdmin.getAll);
router.get('/admin/hospital/count',hAdmin.count);
router.post('/admin/hospital/search',hAdmin.search);

router.post('/hospital',hospital.insert);
router.put('/hospital/:id',hospital.update);
router.delete('/hospital/:id',hospital.remove);
router.get('/hospital/:id',hospital.get);
router.get('/hospital',hospital.getAll);
router.get('/hospital/count',hospital.count);
router.post('/hospital/search',hospital.search);

router.post('/admin/pharm',pAdmin.insert);
router.put('/admin/pharm/:id',pAdmin.update);
router.delete('/admin/pharm/:id',pAdmin.remove);
router.get('/admin/pharm/:id',pAdmin.get);
router.get('/admin/pharm',pAdmin.getAll);
router.get('/admin/pharm/count',pAdmin.count);
router.post('/admin/pharm/search',pAdmin.search);

router.post('/assist/pharm',pharmAssist.insert);
router.put('/assist/pharm/:id',pharmAssist.update);
router.delete('/assist/pharm/:id',pharmAssist.remove);
router.get('/assist/pharm/:id',pharmAssist.get);
router.get('/assist/pharm',pharmAssist.getAll);
router.get('/assist/pharm/count',pharmAssist.count);
router.post('/assist/pharm/search',pharmAssist.search);

router.post('/pharm',pharm.insert);
router.put('/pharm/:id',pharm.update);
router.delete('/pharm/:id',pharm.remove);
router.get('/pharm/:id',pharm.get);
router.get('/pharm',pharm.getAll);
router.get('/pharm/count',pharm.count);
router.post('/pharm/search',pharm.search);

router.post('/admin',sAdmin.insert);
router.put('/admin/:id',sAdmin.update);
router.delete('/admin/:id',sAdmin.remove);
router.get('/admin/:id',sAdmin.get);
router.get('/admin',sAdmin.getAll);
router.get('/admin/count',sAdmin.count);
router.post('/admin/search',sAdmin.search);

router.post('/doctor',doctor.insert);
router.put('/doctor/:id',doctor.update);
router.delete('/doctor/:id',doctor.remove);
router.get('/doctor/:id',doctor.get);
router.get('/doctor',doctor.getAll);
router.get('/doctor/count',doctor.count);
router.post('/doctor/search',doctor.search);

router.post('/patient',patient.insert);
router.put('/patient/:id',patient.update);
router.delete('/patient/:id',patient.remove);
router.get('/patient/:id',patient.get);
router.get('/patient',patient.getAll);
router.get('/patient/count',patient.count);
router.post('/patient/search',patient.search);



module.exports = router ;


