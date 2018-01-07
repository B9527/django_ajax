from django.conf.urls import include, url
from django.contrib import admin
from app01 import views
urlpatterns =(
    # Examples:
    # url(r'^$', 'ajax_maizi.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # url(r'^admin/', include(admin.site.urls)),
    url(r'^test/$', views.test),
    url(r'^html_test/$', views.html_test),
    url(r'^error_xhr/$', views.error_xhr),
    url(r'^error_jq/$', views.error_jq),

)
