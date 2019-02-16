//Console.log out elements in JSON file

//Just to be clear, this question asks for each of the elements inside the file. I understand the use of "elements" to mean both keys and values.

const myJSON = {
  "video": [{
    "id": 12312412312,
    "name": "Ecuaciones Diferenciales",
    "url": "/video/math/edo/12312412312",
    "author": {
      "data": [{
        "name_author": "Alejandro Morales",
        "url": "/author/alejandro-morales",
        "type": "master"
      }]
    }
  }]
};

function getJSONElements(json) {
  for (let key in json) {
    if (Array.isArray(json[key])||typeof json[key] === 'object') {
      //The conditional statement below is only there to make sure that key 0 for each of the two arrays (which contain only one element each) is not printed. My understanding of the wording of question 2, "Console.log each of the elements inside this JSON file that is id, name, URL, author and each element inside the data array" suggests that you do not want these "array keys" (which are 0 in this case, because they contain only one element each) to be printed. The elements inside the arrays, however, are printed. Because no other key in this JSON file is an integer (only strings), the code below is suitable for this example, but if this was not the case (i.e. if one or more key names were numeric) this conditional statement would need to be altered.
      if(isNaN(key)){
      console.log(key+":",json[key]);
      getJSONElements(json[key]);
      }else{
        getJSONElements(json[key]);
      }
    } else {
      console.log(key+":"+json[key]);
    }
  }
}
getJSONElements(myJSON);

