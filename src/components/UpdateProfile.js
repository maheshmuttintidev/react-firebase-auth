import React, {useRef, useState} from 'react';
import {Card, Button, Form, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'


export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const history = useHistory()
    const {currentUser, updateEmail, updatePassword} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match!")
        }

        const promises = []
        setLoading(true)
        setError('')
        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError("Failed to update profile")
        }).finally(() => {
            setLoading(false)
        })

    }
    return (
        <>
        <Card>
            <Card.Body>
                <h1 className="text-center mb-4">Update Profile</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control defaultValue={currentUser.email} type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Leave alone to remain same" type="password" ref={passwordRef} />
                    </Form.Group>
                    <Form.Group id="passwordConfirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control placeholder="Leave alone to remain same" type="password" ref={passwordConfirmRef} />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Update Profile
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to="/">
                <span className="white-link">Cancel</span>
            </Link>
        </div>
        </>
    );
}
