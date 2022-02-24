import tokenService from "./tokenService"

const BASE_URL = '/api/locations/'

export function create(location){
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(location),
        headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error submitting the form. Check the express terminal!')
    })
}

export function getAll(){
    return fetch(BASE_URL, {
        headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Problem fetching getAll')
    })
}

