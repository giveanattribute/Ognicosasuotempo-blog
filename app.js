
var firebaseApp = firebase.initializeApp({
    
    
    apiKey: "AIzaSyDwYG7_CmAtvfZdvjfffOKQCldVpu42qUE",
    authDomain: "ognicosasuotempo-stories.firebaseapp.com",
    databaseURL: "https://ognicosasuotempo-stories.firebaseio.com",
    projectId: "ognicosasuotempo-stories",
    storageBucket: "ognicosasuotempo-stories.appspot.com",
    messagingSenderId: "470196048860"
    
    
    
    
});
var db = firebaseApp.database();
var storiesQueries = db.ref('stories');
var i = 0;
var app = new Vue({
    
    el: '#app',
    data:{
        newStory:{
            
            storyTitle: '',
            storyDate: '',
            storyContent:'',
            storyTag:'',
            storyRank: 0
        
                }
          },
    
    firebase:{
        
        
        stories: storiesQueries
        
        
            },
    
    methods:{
        
        addStory: function(story)
        {
                        storiesQueries.push(this.newStory)

         





  
        },
        
        rankUp: function(story)
        {

                            storiesQueries.child(story['.key']).update({storyRank: ++story.storyRank});

           
            },
            
     
        dynamicSort: function (property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

    }
}
                )
function setCookie() {
 
    var now = new Date();
    var exp = new Date(now.getTime() + 1000);
    var status = '';
    document.cookie = 'ExpirationCookieTest=1; expires='+exp.toUTCString();
    if (document.cookie && document.cookie.indexOf('ExpirationCookieTest=1') != -1) {

        console.log()
    } else {
        console.log()
    }

}

function getCookie() {
    var status = null;
    if (document.cookie && document.cookie.indexOf('ExpirationCookieTest=1') != -1) {
        return status = 1;
    } else {
       return status = -1;
    }
}

 

 
