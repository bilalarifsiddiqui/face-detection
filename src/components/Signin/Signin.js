import React from 'react';

const Signin = ({ routeChanged }) => {
    return (

        <article className="br3 pa3 ba  b--black-10 mv9 w-100 w-50-m w-25-l mv5 shadow-5 center" style={{ display: 'flex', justifyContent: 'center' }}>
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div >
                        <input className="b ph5 mv2 pv2 input-reset ba b--black bg-transparent  hover-bg-blue pointer f6 dib" type="submit" value="Sign in" onClick={() => routeChanged('home')} />
                    </div>
                    <div >
                        <input className="b mv2 pv2 input-reset ba b--black bg-transparent  hover-bg-blue pointer f6 dib" style={{ paddingRight: '60px', paddingLeft: '58px' }} type="submit" value="Register" onClick={() => routeChanged('register')} />
                    </div>

                </div>
            </main>
        </article>

    )
}


export default Signin;