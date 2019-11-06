const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  const myToken = core.getInput('GITHUB_TOKEN');
  const octokit = new github.GitHub(myToken);

  console.log('github context => ', github.context);

  const result = await octokit.request('POST /repos/:owner/:repo/issues/:issue_number/comments', {
    headers: {
      authorization: `token ${myToken}`,
    },
    owner: 'hamstu',
    repo: 'testing',
    issue_number: '1',
    body: 'This is a test comment from github actions!',
  });

  console.log(result.data);
}

run();
