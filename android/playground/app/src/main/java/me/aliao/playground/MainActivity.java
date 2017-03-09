package me.aliao.playground;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

public class MainActivity extends AppCompatActivity implements IWXRenderListener {

  private WXSDKInstance mWXSDKInstance;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    initWXSDKInstance();
  }

  private void initWXSDKInstance() {
    mWXSDKInstance = new WXSDKInstance(this);
    mWXSDKInstance.registerRenderListener(this);

    mWXSDKInstance.render("WXDriver", WXFileUtils.loadAsset("main.js", this), null, null, -1, -1, WXRenderStrategy.APPEND_ASYNC);

  }

  @Override
  public void onViewCreated(WXSDKInstance instance, View view) {
    setContentView(view);
  }

  @Override
  public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

  }

  @Override
  public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

  }

  @Override
  public void onException(WXSDKInstance instance, String errCode, String msg) {

  }

  @Override
  protected void onResume() {
    super.onResume();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityResume();
    }
  }

  @Override
  protected void onPause() {
    super.onPause();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityPause();
    }
  }

  @Override
  protected void onStop() {
    super.onStop();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityStop();
    }
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    if (mWXSDKInstance != null) {
      mWXSDKInstance.onActivityDestroy();
    }
  }
}
