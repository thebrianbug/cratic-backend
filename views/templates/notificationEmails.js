var template = function(step, location, action, name) {
	var userEmail = `<!DOCTYPE html>
	<html lang="en" style="box-sizing: border-box;font-family: sans-serif;line-height: 1.15;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;-ms-overflow-style: scrollbar;-webkit-tap-highlight-color: transparent;">
	<head style="box-sizing: border-box;">
			<meta charset="utf-8" style="box-sizing: border-box;">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" style="box-sizing: border-box;">
			<!-- Bootstrap 4 -->
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" style="box-sizing: border-box;">
			<title style="box-sizing: border-box;">Cratic</title>
	</head>

	<body style="box-sizing: border-box;margin: 0;font-family: -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,&quot;Helvetica Neue&quot;,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;;font-size: 1rem;font-weight: 400;line-height: 1.5;color: #212529;text-align: left;background-color: #fff;min-width: 992px!important;">

			<div class="jumbotron" style="box-sizing: border-box;padding: 2rem 2rem;margin-bottom: 2rem;background-color: #2E303C;border-radius: 0;color: #f4f4f4 !important;margin: 0;">
					<h1 style="box-sizing: border-box;color: #f4f4f4 !important;margin-top: 0;margin-bottom: .5rem;font-family: inherit;font-weight: 500;line-height: 1.2;color: inherit;font-size: 2.5rem; text-align:center !important;">New Cratic Love!!</h1>
					<p class="lead" style="box-sizing: border-box;color: #f4f4f4 !important;margin-top: 1rem;margin-bottom: 2rem;orphans: 3;widows: 3;font-size: 1.25rem;font-weight: 300; text-align:center !important;">They are at step: #${step}</p>

					<hr class="hr-full" style="box-sizing: content-box;height: 0;overflow: visible;margin-top: 1rem;margin-bottom: 1rem;border: 0;border-top: 1px solid rgba(0,0,0,.1);max-width: 100%;border-width: 3px;border-color: #007bff;">
					<p style="box-sizing: border-box;color: #f4f4f4 !important;margin-top: 2rem;margin-bottom: 1rem;orphans: 3;widows: 3;">Hi Israel,</p> 
					<p style="box-sizing: border-box;color: #f4f4f4 !important;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;"> There is new activity (#${step}) on Cratic: </p> 
					<p style="box-sizing: border-box;color: #f4f4f4 !important;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;"> ${name} has ${action} on the ${location}.</p>
					<p style="box-sizing: border-box;color: #f4f4f4 !important;margin-top: 0;margin-bottom: 1rem;orphans: 3;widows: 3;">Be sure to welcome them to Cratic!</p>
			</div>

	</body>

	</html>`;
	return userEmail;
}

module.exports = template;