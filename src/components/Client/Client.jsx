import React from 'react'
import Modal from 'react-modal';
import "./client.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Client = ({ search, id, client }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    console.log(client[0].name)


    return (
        <div>
            <h1 >Bienvenue <span> {client[0].name} </span> </h1>
            <img style={{ width: "150px" }} src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
            <p>Info</p>
            <div className="infos">
                <h3> {client[0].tel} </h3>
                <h3> {client[0].email} </h3>
                <h3> {client[0].birth_date} </h3>
                <button onClick={openModal}>Open Modal</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="birthdayCard">
                        <div className="cardFront">
                            <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
                            <div className="balloons">
                                <div className="balloonOne" />
                                <div className="balloonTwo" />
                                <div className="balloonThree" />
                                <div className="balloonFour" />
                            </div>
                        </div>
                        <div className="cardInside">
                            <h3 className="back">HAPPY BIRTHDAY vodoo!</h3>
                            <p>Dear Friend,</p>
                            <p>
                                Happy birthday!! I hope your day is filled with lots of love and
                                laughter! May all of your birthday wishes come true.
                            </p>
                            <p className="name">Pawan</p>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Client
