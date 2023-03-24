<template>
<div class="container">
<div class="row">
<div class="col-12">
<form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" v-model="product.name"  id="product-name">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" id="description-product" rows="3"  v-model="product.description" ></textarea>
    </div>
   <div class="form-group">
    <label for="exampleFormControlSelect1" > Category </label>
    <select class="form-control" id="category-product"  v-model="product.category"  >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
        <div v-if="!image">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="picture-product" v-on="product.picture"   @change="onFileChange">
              <label class="custom-file-label" for="inputGroupFile01">Choose img</label>
            </div>
        </div>
        <div v-else>
        <img :src="image" />
           <button @click="removeImage">Remove image</button>
        </div>
  </div>
  <div class="form-group">
      <label for="quantity">Quantity</label>
      <input step="10" value="0" type="number" id="quantity-product" class="form-control"  min="1" max="50"  v-model="product.quantity"/>
  </div>

  <div class="form-group">
    <button @click="invia">submit</button>
  </div>
</form>      
</div>
</div>
</div>
</template>
<script>

//import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
  name: 'NewProductView',
  data (){
    return {
       product : {
              name:'',
              description:'',
              category:'' ,
              picture:'' ,
              quantity:0 ,
       },
       image: ''
      /*car : {
        vin : 'vinnew 1-1-1-1-2',
        tag : 'TAG02-1',
        km :'2333',
        USED : false,
        color:'black',
        maintenance: [{
          name:'maint2',
          description:'des1',
          day:'date1'
        }]
      }*/
    }
  },
  computed : {

  },
  methods : {
    ...mapMutations({  'setProduct': 'product/setProduct'} ),
    invia(){
       console.log('First invia call');
        this.setProduct(this.product);
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      //var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
       
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log("file  "+file )
      //console.log("this is file" +);
    },
    removeImage: function (e) {
      this.image = '';
      console.log(e);
    }

   /*
    invia(){
      var url  = 'http://localhost:3000/car';
      var payload = this.car;
      let axiosConfig = {
        mode: 'no-cors',
           cache: 'default' ,
           headers  : {
            'Access-Control-Allow-Headers': 'Content-Type',
            //'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin' : '*',
            'Authorization':'Token  *****************'
          }
        
        };
      axios.post(url,payload,axiosConfig)
        .then( res => {
          console.log(res);
          
        })
        .catch(err => {
          console.log(err)
        });
    }*/
  },
}
</script>

<style> 
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>