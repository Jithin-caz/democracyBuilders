// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Election {
    // Structure to represent a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Structure to represent a voter
    struct Voter {
        bool voted;
        uint candidateId;
    }

    // Mapping of addresses to voters
    mapping(address => Voter) public voters;

    // Array of Candidate objects
    Candidate[] public candidates;

    // Function to add a candidate
    function addCandidate(string memory _name) public {
        candidates.push(Candidate(candidates.length, _name, 0));
    }

    // Function to get the total number of candidates
    function getCandidateCount() public view returns (uint) {
        return candidates.length;
    }

    // Function to get candidate details by ID
    function getCandidate(uint _id) public view returns (uint, string memory, uint) {
        require(_id < candidates.length, "Invalid candidate ID");
        return (candidates[_id].id, candidates[_id].name, candidates[_id].voteCount);
    }

    // Function for a voter to cast a vote
    function vote(uint _candidateId) public {
        require(!voters[msg.sender].voted, "You have already voted.");
        require(_candidateId < candidates.length, "Invalid candidate ID");

        voters[msg.sender].voted = true;
        voters[msg.sender].candidateId = _candidateId;

        candidates[_candidateId].voteCount++;
    }

    // Function to get the total number of votes received by a candidate
    function getVoteCount(uint _candidateId) public view returns (uint) {
        require(_candidateId < candidates.length, "Invalid candidate ID");
        return candidates[_candidateId].voteCount;
    }
}