var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/laturitukku/laturitukku.github.io', // Update to point to your repository  
        user: {
            name: 'laturitukku', // update to use your name
            email: 'laturitukku@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)