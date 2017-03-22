package me.aliao.playground.adapter;

import android.widget.ImageView;

import com.squareup.picasso.Picasso;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

import me.aliao.playground.utils.LogUtil;

/**
 * Created by liaolishuang on 2017/3/16.
 */

public class ImageAdapter implements IWXImgLoaderAdapter {
  @Override
  public void setImage(final String url, final ImageView view, WXImageQuality quality, WXImageStrategy strategy) {

    LogUtil.d("url --> " + url);

    WXSDKManager.getInstance().postOnUiThread(new Runnable() {
      @Override
      public void run() {
        Picasso.with(WXEnvironment.getApplication())
            .load(url)
            .into(view);
      }
    }, 0);

  }
}
