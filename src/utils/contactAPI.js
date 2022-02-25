import tokenService from "./tokenService"

const BASE_URL = '/api/contacts/';

export function create(contact){
    // console.log('locationAPI being hit')
    // console.log(location, 'location form data in locationAPI')
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
			'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
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

export function getOne(contactId){
    return fetch(BASE_URL + contactId + "/edit", {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Problem fetchin getOne');
    })
}

export function update(contact, contactId){
    return fetch(BASE_URL + contactId, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
			'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
		}
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error updating contact. Check the express terminal!')
    })
}