import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Input, Label } from "reactstrap";
import HomepageLayout from "../Layouts/HomepageLayout";

import { createProduct } from "../../redux/actions/product";

class SingleItemPage extends Component {
	state = {
		name: "",
		brand: "",
		description: "",
		imageUrl: "",
		availableSizes: [],
		categories: [],
		price: "",
		tags: [],
		submitted: false
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleMultiSelectChange = e => {


		const selectedValues = Array.from(e.target.options).filter(option => option.selected).map(option => option.value)

		this.setState({
			[e.target.name]: selectedValues
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ submitted: true });
		const {
			name,
			brand,
			description,
			imageUrl,
			availableSizes,
			categories,
			price,
			tags
		} = this.state;

		this.props.createProduct(
			name,
			brand,
			description,
			imageUrl,
			availableSizes,
			categories,
			price,
			tags
		);
	};

	render() {
		const {
			name,
			brand,
			description,
			imageUrl,
			availableSizes,
			categories,
			price,
			tags,
			submitted
		} = this.state;

		return (
			<HomepageLayout>
				<form name="form" onSubmit={this.handleSubmit}>
					<div
						className={
							"form-group" +
							(submitted && !name ? " has-error" : "")
						}
					>
						<label htmlFor="name">Product name</label>
						<input
							autoFocus={true}
							type="text"
							className="form-control"
							name="name"
							value={name}
							onChange={this.handleChange}
						/>
						{submitted && !name && (
							<div className="help-block">Name is required</div>
						)}
					</div>
					<div
						className={
							"form-group" +
							(submitted && !brand ? " has-error" : "")
						}
					>
						<label htmlFor="brand">Brand</label>
						<input
							type="text"
							className="form-control"
							name="brand"
							value={brand}
							onChange={this.handleChange}
						/>
						{submitted && !brand && (
							<div className="help-block">Brand is required</div>
						)}
					</div>
					<div
						className={
							"form-group" +
							(submitted && !description ? " has-error" : "")
						}
					>
						<label htmlFor="description">Description</label>
						<input
							type="description"
							className="form-control"
							name="description"
							value={description}
							onChange={this.handleChange}
						/>
						{submitted && !description && (
							<div className="help-block">
								Description is required
							</div>
						)}
					</div>
					<div
						className={
							"form-group" +
							(submitted && !imageUrl ? " has-error" : "")
						}
					>
						<label htmlFor="imageUrl">Image url</label>
						<input
							type="imageUrl"
							className="form-control"
							name="imageUrl"
							value={imageUrl}
							onChange={this.handleChange}
						/>
						{submitted && !imageUrl && (
							<div className="help-block">
								Image url is required
							</div>
						)}
					</div>
					<FormGroup>
						<Label for="categories">Select categories</Label>
						<Input
							type="select"
							name="categories"
							multiple
							onChange={this.handleMultiSelectChange}
						>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Input>
					</FormGroup>
					<div className="form-group">
						<button className="btn btn-primary">SAVE</button>
					</div>
				</form>
			</HomepageLayout>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	createProduct: (
		name,
		brand,
		description,
		imageUrl,
		availableSizes,
		categories,
		price,
		tags
	) => {
		dispatch(
			createProduct(
				name,
				brand,
				description,
				imageUrl,
				availableSizes,
				categories,
				price,
				tags
			)
		);
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleItemPage);
