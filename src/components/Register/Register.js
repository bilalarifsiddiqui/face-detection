import React from 'react';

const Register = ({ routeChanged }) => {
    return (

        <article className="br3 pa3 ba  b--black-10 mv9 w-100 w-50-m w-25-l mv5 shadow-5 center" style={{ display: 'flex', justifyContent: 'center' }}>
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                   
                    <div >
                        
                        <input className="b mv2 pv2 input-reset ba b--black bg-transparent  hover-bg-blue pointer f6 dib" style={{ paddingRight: '60px', paddingLeft: '58px' }} type="submit" value="Register" onClick={() => routeChanged('signin')} />
                    </div>

                </div>
            </main>
        </article>

    )
}


export default Register;