(function()
{
	"use strict"

	console.log("file 'index.js' work!!! ")

// Declaration of variables
	var arrID = []

	var $ul = document.querySelector('.active_list'),
		$hrefs = $ul.querySelectorAll('a')

	$hrefs.forEach(function($el, index)
	{
		arrID[index] = $el.getAttribute('href')
	})

	var $wrContent = document.querySelector('.wr-content')
	var arrElementsContent = []

	for (var i = 0; i < arrID.length; i++)
	{
		arrElementsContent[i] = document.querySelector(arrID[i])
	}


// Function add class for active menu
	function add_class_for_list(current_list)
	{
		$hrefs.forEach(function($el, index)
		{
			$el.classList.remove('active-content-menu')
		})

		$hrefs[current_list].classList.add('active-content-menu')
	}

// Function controll position of content
	function active_content(length)
	{
		var height = 0
		
		for ( var i = 0; i < length; i++ )
		{
			height += arrElementsContent[i].scrollHeight
		}

		if ( $wrContent.scrollTop < height )
		{
			length--

			if ( length > 0 )
				active_content(length)
			else if ( length == 0 )
			{
				add_class_for_list(length)
			}
		}
		else
		{
			add_class_for_list(length)
		}
	}

// Listen scroll on context
	var length = arrElementsContent.length - 1 // amount item of list (menu)
	$wrContent.addEventListener('scroll', function(event)
	{
		active_content(length)
	})
})()






