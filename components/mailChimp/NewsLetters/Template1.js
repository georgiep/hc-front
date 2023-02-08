import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://aquavistahotels.us21.list-manage.com/subscribe/post?u=7a8046f653c90e5e6b4e32e36&amp;id=a346b3ab23&amp;f_id=0020cfe1f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomForm = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <>
                <div className={'form-input-mailchimp'}>
                    <SimpleForm onSubmitted={formData => subscribe(formData)} />
                    {status === "sending" && <div style={{ color: "blue",position:"absolute", bottom: '-22px' }}>sending...</div>}
                    {status === "error" && <div style={{ color: "red",position:"absolute", bottom: '-22px' }} dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div style={{ color: "green",position:"absolute", bottom: '-22px' }}>Subscribed !</div>}
                </div>
                <style global jsx>{`
                     .form-input-mailchimp input{
                            border: 0;
                            border-bottom: 1px solid #04456D;
                            padding: 10px 2px;
                            background: 0 0;
                            font-size: 14px;
                            font-weight: 400;
                            width: 100%;
                     }
                     
                    .form-input-mailchimp button {
                        font-family: Gotham Greek!important;
                        font-style: normal!important;
                        font-weight: 400!important;
                        font-size: 14px!important;
                        letter-spacing: 0.03em!important;
                        background: transparent!important;
                        padding: 0!important;
                        color: #1c3450!important;
                        border: 0!important;
                        border-bottom: 0!important;
                        cursor: pointer!important;
                        position: absolute;
                        right: 10px;
                        top: 9px;
                     }
                `}</style>
            </>
        )}
    />
)

export default CustomForm