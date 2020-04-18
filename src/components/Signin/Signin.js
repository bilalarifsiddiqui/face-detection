import React from 'react';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailChange: '',
            passwordChange: ''

        }
    }

    onEmailChange = (e) => {
        this.setState({ emailChange: e.target.value })
    }

    onPasswordChange = (e) => {
        console.log(e.target.value);
        this.setState({ passwordChange: e.target.value })
    }

    onSubmitButton = () => {
        const { emailChange, passwordChange } = this.state;
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailChange,
                password: passwordChange
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.routeChanged('home');
                }
            })

    }


    render() {
        const { routeChanged } = this.props;
        return (


            <article className="br3 pa3 ba  b--black-10 mv9 w-100 w-50-m w-25-l shadow-5 center" style={{ display: 'flex', justifyContent: 'center' }}>
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                    onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div >
                            <input className="b ph5 mv2 pv2 input-reset ba b--black bg-transparent  grow pointer f6 dib"
                                onClick={this.onSubmitButton} type="submit" value="Sign in" />
                        </div>
                        <div >
                            <input className="b mv2 pv2 input-reset ba b--black bg-transparent  grow pointer f6 dib" style={{ paddingRight: '60px', paddingLeft: '58px' }} type="submit" value="Register" onClick={() => routeChanged('register')} />
                        </div>

                    </div>
                </main>
            </article>

        )
    }
}


export default Signin;