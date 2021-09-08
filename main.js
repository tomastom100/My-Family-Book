var images = ["fam.jpeg","abu.jpeg", "ma.jpeg" , "pa.jpeg", "sebas.jpg", "yo.jpeg"];
var names = ["Fmaily Book","Nina", "Lili", "Juan", "Sebas", "Tomas"];
var i = 0;
function update()
{
  document.getElementById("family_member_image").src=images[i];
  document.getElementById("family_member_name").innerHTML=names[i];
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}