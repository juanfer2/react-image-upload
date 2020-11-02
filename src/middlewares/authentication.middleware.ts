import {isEmpty} from 'lodash'
/*
register(user: User) {
    const json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(this.Url+'user' , json, { headers: headers});
  }

  login(user: User) {
    const json = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<User>(this.Url+'auth/login' , json, { headers: headers});
  }

  setSession(user: User): void {
    localStorage.setItem('id', String(user.id))
    localStorage.setItem('token', user.token)
    localStorage.setItem('username', user.username)
    localStorage.setItem('name', user.name)
    localStorage.setItem('email', user.email)
  }

  isAuth(): boolean {
    if (localStorage.getItem('token') != null  ) {
      return true
    }else{
      return false
    }
  }

  logout(): void {
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('name')
    localStorage.removeItem('email')

    this.router.navigate(['/'])

  }
/** */

interface userSession {
  id: string | number;
  token: string;
}

export const setSession = (user: userSession) => {
  const id: string = user.id.toString()
  localStorage.setItem('id', id)
  localStorage.setItem('token', user.token)
//  localStorage.setItem('last_name', user.last_name)
//  localStorage.setItem('first_name', user.first_name)
//  localStorage.setItem('email', user.email)
}

export const logout= () => {
  localStorage.removeItem('id')
  localStorage.removeItem('token')
//  localStorage.removeItem('last_name')
//  localStorage.removeItem('first_name')
//  localStorage.removeItem('email')
}

export const isAuth =() =>{
  if ( !isEmpty(localStorage.getItem('token'))  ) {
    return true
  }else{
    return false
  }
}
