function strip(x: string | number) {
	if(typeof x === 'number'){
		return x.toFixed(2)
	}
	return x.trim()
}

class MyResponse {
	header = 'reponse header'
	result = 'responce result'
}

class MyError {
	header = 'response header'
	message = 'error message'
}

function handle(res: MyResponse | MyError) {
	if(res instanceof MyResponse) {
		return {
			info: res.header + res.result
		}
	} else {
		return {
			info: res.header + res.message
		}
	}
}

// =========================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType){
	// ...
}

setAlertType('success')
setAlertType('warning')