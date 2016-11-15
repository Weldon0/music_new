var audio = $('audio').get(0);
var progress = $('progress');
var time_text = $('time').get(0);
var h1 = $('h1').get(0);
var h2 = $('h2').get(0);
var volume_text = $('volume').get(0);
var section = $('section').get(0);
var pause_button = $('.glyphicon-pause').get(0);
var list = [{'name':'传奇', 	  'singer':'王菲',   'src':'音乐播放器/传奇.mp3',       'pic':'音乐播放器/wf.png'}, 
			{'name':'知道不知道', 'singer':'刘若英', 'src':'音乐播放器/知道不知道.mp3', 'pic':'音乐播放器/lry.jpg'}];
progress[1].value = 0.5;
audio.volume = 0.5;


	var list_num = 1;
	play_music(list[list_num]);

/**
 * 传入参数播放音乐更改图片
 */
 	function play_music (index) 
 	{
 		audio.src = index.src;
 		audio.play();
 		h1.innerHTML = index.name;
 		h2.innerHTML = index.singer;
 		section.style.backgroundImage = 'url(' + index.pic + ')';
 	}
 	// 
 	function playOrpause()
 	{
 		if (audio.paused) 
 		{
 			audio.play();
 			pause_button.className = 'glyphicon glyphicon-pause';
 		}
 		else
 		{
 			audio.pause();
 			pause_button.className = 'glyphicon glyphicon-play';
 		}
 	}

 	/**
 	 * 音量减小事件
 	 */
 	function volumeDown()
 	{
 		if (audio.volume > 0) 
 		{
 			audio.volume -= 0.1;
 		}
 	}

 	/**
 	 * 音量增大事件
 	 */
 	function volumeUp() 
 	{
 		if (audio.volume < 10) 
 		{
 			audio.volume += 0.1;
 		}
 	}

 	/**
 	 * 添加时间变化更改数字的方式
 	 */
 	audio.addEventListener('timeupdate', change_time);
 	function change_time() 
 	{
 		var now_time = audio.currentTime;
 		var minute = Math.floor(now_time / 60);
 		var second = Math.floor(now_time % 60);

 		minute = minute < 10 ? '0' + minute : minute;
 		second = second < 10 ? '0' + second : second;

 		time_text.innerHTML =minute + ':' +second;
 		/*
 			更改进度条的进度
 		 */
 		progress[0].value = now_time / audio.duration;
 	}

 	/**
 	 * 添加音量条进度的改变事件
 	 */
 	audio.addEventListener('volumechange', change_volume);
 	function change_volume() 
 	{
 		progress[1].value = audio.volume;
 	}

 	function pre()
 	{
 		if (list_num == 0) 
 		{
 			list_num++;
 		}
 		else
 		{
 			list_num--;
 		}
 		play_music(list[list_num])
 	}

 	function next()
 	{
 		
 		if (list_num < list.length - 1) 
 		{
 			list_num++;
 		}
 		else
 		{
 			list_num--;
 		}
 		play_music(list[list_num]);
 	}