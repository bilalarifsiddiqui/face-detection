import React from 'react';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameChanged: '',
            emailChanged: ''
        }
    }

    onNameChange = (e) => {
        this.setState({ nameChanged: e.target.value })
    }
    onEmailChange = (e) => {
        this.setState({ emailChanged: e.target.value })
    }


    onRegisterClick = () => {
        const { nameChanged, emailChanged } = this.state;
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: nameChanged,
                email: emailChanged,
            })

        })
            .then(res => res.json())
            .then(user => {
                if (user)
                    this.props.loadUser(user);
                this.props.routeChanged('home')
            })


    }



    render() {
        return (

            <article className="br3 pa3 ba  b--black-10 mv9 w-100 w-50-m w-25-l shadow-5 center" style={{ display: 'flex', justifyContent: 'center' }}>
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address"
                                    onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password"
                                />
                            </div>
                        </fieldset>

                        <div >

                            <input className="b mv2 pv2 input-reset ba b--black bg-transparent  grow pointer f6 dib" style={{ paddingRight: '60px', paddingLeft: '58px' }} type="submit" value="Register" onClick={this.onRegisterClick} />
                        </div>

                    </div>
                </main>
            </article >

        )
    }
}


export default Register;