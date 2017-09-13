Vue.component("button-select",{
	           props:['totalfun','total'],
		    	template:'<div class="box" v-on:click="interset"><p @click="interset">{{counter}}</p></div>',
		    	data:function(){
		    		return { counter:0
		    		}
		    		},
		    	methods:{
		    		interset:function(){
		    			this.counter+=1;

		    		}
		    	}
		    	
		    })
		    
		    new Vue({
		    	el:'#example3',
		    	data:{
		    		total:10
		    	},
		    	methods:{
		    		totalfun:function(){
		    		   return this.total+=1
		    		},
		    		interset:function(){
		    			this.total+=1;
		    			console.log(this.total)
		    		}
		    	},
		    	mounting:function(){
		    		
		    		console.log(this.totalfun())
		    	}
		    })