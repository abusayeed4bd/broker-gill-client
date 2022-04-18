import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='page'>
            <div className="container my-3">
                <div className="question1 bg-light p-2 my-2">
                    <h2 className='text-danger'>Difference between authorization and authentication</h2>
                    <hr />
                    <p><b className='text-danger'>Authorization:</b>
                        Authorization means to allow some one to use or get resourse that owned by some one. For example I have a car I hava full credential to use it but if My friend want to use it I can authorize him to use my car
                    </p>
                    <p><b className='text-danger'>Authentication:</b>
                        Authentication is a process to provide legal information to access somewhere. Most popular authentication process is using email and password process.Also ther are many authentication process like social media, github, google etc
                    </p>
                </div>
                <div className="question1 bg-light p-2 my-2">
                    <h2 className='text-danger'>Why I am using firebase and What other options do I have to implement authentication?</h2>
                    <hr />
                    <p>Firebase is one of the popular authentication system provided by google. it is easy to handle. ther are many resourses and custom hooks that makes easy to do authentication process.
                    </p>
                    <p><b className='text-danger'>Authentication service providers:</b>
                        Active Directory,
                        auth0,
                        OpenID Connect,
                        Custom Java Provider,
                        OpenID Connect Authentication Proxy,
                        IBM Cognos Series 7,
                        LDAP,
                        SAP,
                        SiteMinder,
                    </p>
                </div>
                <div className="question1 bg-light p-2 my-2">
                    <h2 className='text-danger'>Other service that provide firebase:</h2>
                    <hr />
                    <ul>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>

                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                    </ul>

                </div>


            </div>
        </div>
    );
};

export default Blog;