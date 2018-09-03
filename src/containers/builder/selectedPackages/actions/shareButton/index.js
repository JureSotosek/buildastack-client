import React from 'react';

import styled from 'styled-components';

import { Mutation } from 'react-apollo';
import { createStackMutation } from '../../../../../lib/graphql/mutations';

import { packagesToDependencies } from '../../../../../utils';

import Button from '../../../../../components/Button';
import ShareModal from './shareModal';

const StyledButton = styled(Button)`
  margin-right: 5px;
  margin-left: 5px;
`;

class ShareButton extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleShareOnClick = this.handleShareOnClick.bind(this);
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  handleShareOnClick(createStack) {
    const { selectedPackages } = this.props;

    createStack({
      variables: { dependencies: packagesToDependencies(selectedPackages) }
    }).then(() =>
      this.setState({
        showModal: true
      })
    );
  }

  render() {
    const { showModal } = this.state;

    return (
      <Mutation mutation={createStackMutation}>
        {(createStack, { data, loading, error }) => (
          <React.Fragment>
            <StyledButton
              color={'#ff954f'}
              onClick={() => !loading && this.handleShareOnClick(createStack)}
            >
              {loading ? 'Loading...' : error ? 'Error' : 'Share'}
            </StyledButton>
            {showModal && (
              <ShareModal
                title={'Stack made'}
                subTitle={'A shareable link was created: '}
                link={'buildastack.io/s/' + (data && data.createStack.id)}
                closeModal={this.closeModal}
              />
            )}
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

export default ShareButton;
