export function _formatForFB( str ) {
	str = str.replace(/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g,"")
	str = str.replace(" ","_").toLowerCase();
	return str;
}

export function _formatForSite( str ) {
	return str.split('_').map((txt) => {
		txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		return txt;
	}).join( " " );
}
// module.exports = {

// 	_formatForFB: function (str) {

// 	},
// 	_formatForSite: function  (str) {
// 		var arr = str.split("_")
// 		var newArr = arr.map(function (txt) {
// 			 txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
// 			 return txt
// 		});
// 		return newArr.join(" ")
// 	}
// }

