
function attachEventHandlers() {
	
	// TODO: call handleImageClick() when an image is clicked

}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
		
		// fade info box out

	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		// fade info box in

		// update image source
	}
}

$('document').ready(function() {

	attachEventHandlers();

});
