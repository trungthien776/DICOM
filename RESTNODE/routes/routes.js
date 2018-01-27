module.exports = function(express,app){
	var router=express.Router();
	var bodyParser=require('body-parser');
	var oc = require('orthanc-client');
	
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());


	var client = new oc({
    url: 'http://localhost:8042',
    auth: {
      username: 'foo',
      password: 'bar'
    		}
	});

	router.get('/',function(req,res){
	res.json({message:'xin chao port 4000'});
	});

	router.get('/tatcabenhnhan',function(req,resp){
	client.instances.getAll()
		.then(function(res) {
        	resp.json(res);
        	console.log(res[1]);

   			 })
    	.catch(function(err) {
       		resp.json({message:'loi khong xac dinh'});
    		});
		});

	app.use('/',router);
	app.use('/tatcabenhnhan',router);
}