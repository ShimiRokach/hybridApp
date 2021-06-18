package com.example.hybridapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView webView = new WebView(this);
        WebView.setWebContentsDebuggingEnabled(true);
        webView.getSettings().setJavaScriptEnabled(true);
        WebSettings settings = webView.getSettings();
        settings.setDomStorageEnabled(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        webView.loadUrl("file:///android_asset/home.html");
        setContentView(webView);
    }

    //prevent the user from anciently exit the app
    @Override
    public void onBackPressed() {
        Toast.makeText(this,"Please use the back button on the top left", Toast.LENGTH_LONG);
    }
}