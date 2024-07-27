import styled from 'styled-components';

export const FilesWrapper = styled.div`
	min-width: 20%;
	max-width: 20%;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	input[type="file"] {
		display: none;
	}

	form, #filesContainer {
		display: flex;
		flex: 1;
		overflow: hidden;
		flex-direction: inherit;
	}

	#toolButtons {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	#leftButtons i {
		margin-right: 0.2rem	
	}

	#rightButtons i {
		margin-left: 0.2rem	
	}

	#sectionControls {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	#sectionControls label {
		margin-right: 0.5em;
	}

	#sectionInput {
		padding: 0.2rem;
		width: 100%;
	}

    .btn-files {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        color: #6c757d;
        border: 1px solid #ced4da;
        border-radius: 4px;
		font-size: 1.2rem;
    }

    .btn-files:hover {
        background-color: #e2e6ea;
    }

	#filesLabel {
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 0.1rem;
	}

	button[type="submit"] {
		margin-left: 0px;
		margin-right: 0px;
		margin-top: 0.5rem;
		font-weight: bold;
	}

	#statusParagraph {
		color: red;
	}
						
	#filesContainer ul li {
		list-style:none;
	}

	#filesContainer ul {
		padding-left: 1rem;
	}

`;


