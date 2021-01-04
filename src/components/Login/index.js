import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { loginUser } from "../../actions/authActions";

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (user) => dispatch(loginUser(user)),
	};
};

class Login extends Component {
	onSubmit = ({ username, password }) => {
		const requestObj = {
			username,
			password,
        };
		this.props.loginUser(requestObj);
	};

	componentDidUpdate() {
		if (this.props.auth.errMessage) {
			message.error(this.props.auth.errMessage);
		}
	}

	render() {
		if (sessionStorage.getItem("authToken") !== null) {
			return <Redirect to="/" />;
		}
		return (
			<div className="wrapper">
                <div className="univ-wrapper">
                    <img src="/images/nulp-logo.svg" />
                </div>
				<div className="card-wrapper">
					<div className="card">
						<div className="card-header">
                            <img src="/images/logo.svg" />
                        </div>
						<Form
							name="login"
							className="login"
							labelCol={{
								span: 24,
							}}
							wrapperCol={{
								span: 24,
							}}
							layout="vertical"
							initialValues={{
								remember: true,
							}}
							onFinish={this.onSubmit}
						>
							<Form.Item
								label="Ім'я входу"
								name="username"
								rules={[
									{
										required: true,
										message: "Don`t valid username",
									},
								]}
							>
								<Input placeholder="Enter username" />
							</Form.Item>
							<Form.Item
								label="Пароль"
								name="password"
								rules={[
									{
										required: true,
										message: "Password min 6 char",
										min: 6,
									},
								]}
							>
								<Input.Password placeholder="Your password" />
							</Form.Item>
							<div className="sub_wrapper">
								<Button
                                    htmlType="submit"
                                    type="primary"
									className="btn btn-success"
									loading={this.props.auth.isLoading}
								>
									Увійти
								</Button>
							</div>
                            <a href="#">Забули пароль?</a>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
