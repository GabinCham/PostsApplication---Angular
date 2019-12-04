import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PUBLICATION DES POSTS';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet' +
         'eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor' +
        'velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. '+
        'In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim,' +
        'fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id phartra ante.',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet' +
        'eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor' +
        'velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. '+
        'In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim,' +
        'fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id phartra ante.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet' +
        'eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor' +
        'velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. '+
        'In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim,' +
        'fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id phartra ante.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon quatrième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet' +
        'eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor' +
        'velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. '+
        'In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim,' +
        'fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id phartra ante.',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon cinquième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet' +
        'eros augue. Etiam facilisis lacus velit, at gravida ante ultrices a. Donec tempor' +
        'velit ut risus malesuada, sit amet consectetur enim laoreet. Quisque commodo tempus mattis. '+
        'In hac habitasse platea dictumst. Proin facilisis lorem sed sem rutrum pulvinar. Nunc sem enim,' +
        'fringilla non vulputate sit amet, pharetra eget leo. Suspendisse id phartra ante.',
      loveIts: 0,
      created_at: new Date()
    }
  ];


}
