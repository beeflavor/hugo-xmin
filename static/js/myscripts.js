function make_link(url,title){
  return "<a href = \"" + url + "\">"+title+"</a>";
}

function make_file_link(html_file_path){
  return "file.edit(\"content/"+html_file_path.slice(0,-5)+".Rmd\")";
}

function make_remove_link(html_file_path){
  var path = html_file_path.replace(/\.[^/.]+$/, "");
  var ret_string = "file.remove(\"content/"+path+".Rmd\");"
  ret_string += "file.remove(\"content/"+path+".md\");";
  ret_string += "file.remove(\"content/"+path+".html\")";
  return ret_string;
}

function make_readRDS_code(aux_files_path, object_name){
  var file_ext = object_name.split(".").pop();
  var file_name = object_name.split('.').slice(0, -1).join('.');
  var output = "";
  if(file_ext.toUpperCase() == "RDS"){
    output = file_name + " <- readRDS(file = \"" + aux_files_path + object_name + "\")";
  }
  
  return output;
}


function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Cmd+C, Enter", text);
}



$( document ).ready(function() {
  $( ".post_listing" )
    .hover(function() {
      $(this).find('.copy_link').css('visibility','visible');
    },
    function() {
      $(this).find('.copy_link').css('visibility','hidden');
    });
});
