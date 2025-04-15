// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract DecentralizedIdentity {
    struct Identity {
        string fullName;
        string ipfsHash;
        string identityHash;
        string organization;
        bool isVerified;
    }

    mapping(address => Identity) public identities;
    mapping(address => bool) public hasIdentity;

    event IdentitySubmitted(
        address indexed user,
        string fullName,
        string ipfsHash,
        string identityHash,
        string organization
    );

    event IdentityVerified(address indexed user, string identityHash);
    event IdentityRejected(address indexed user, string reason);

    modifier onlyNew() {
        require(!hasIdentity[msg.sender], "Identity already submitted");
        _;
    }

    function submitIdentity(
        string memory fullName,
        string memory ipfsHash,
        string memory identityHash,
        string memory organization
    ) external onlyNew {
        identities[msg.sender] = Identity(fullName, ipfsHash, identityHash, organization, false);
        hasIdentity[msg.sender] = true;

        emit IdentitySubmitted(msg.sender, fullName, ipfsHash, identityHash, organization);
    }

    function verifyIdentity(address user) external {
        require(hasIdentity[user], "User has no identity submitted");
        identities[user].isVerified = true;

        emit IdentityVerified(user, identities[user].identityHash);
    }

    function rejectIdentity(address user, string memory reason) external {
        require(hasIdentity[user], "User has no identity submitted");
        delete identities[user];
        hasIdentity[user] = false;

        emit IdentityRejected(user, reason);
    }

    function getIdentity(address user) external view returns (
        string memory fullName,
        string memory ipfsHash,
        string memory identityHash,
        string memory organization,
        bool isVerified
    ) {
        Identity memory id = identities[user];
        return (id.fullName, id.ipfsHash, id.identityHash, id.organization, id.isVerified);
    }
}
