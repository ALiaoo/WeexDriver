package me.aliao.playground;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;

import me.aliao.playground.adapter.ImageAdapter;

/**
 * Created by liaolishuang on 2017/3/16.
 */

public class WXApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();

//    InitConfig config=new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
//    WXSDKEngine.initialize(this,config);

    WXSDKEngine.initialize(this,
        new InitConfig.Builder()
            .setImgAdapter(new ImageAdapter())
            .build());
  }
}