e.ui.internal.Workbench.createAndRunWorkbench(Workbench.java:563)
	at org.eclipse.ui.PlatformUI.createAndRunWorkbench(PlatformUI.java:151)
	at org.eclipse.ui.internal.ide.application.IDEApplication.start(IDEApplication.java:155)
	at org.eclipse.equinox.internal.app.EclipseAppHandle.run(EclipseAppHandle.java:199)
	at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.runApplication(EclipseAppLauncher.java:137)
	at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.start(EclipseAppLauncher.java:107)
	at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:391)
	at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:246)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)
	at java.lang.reflect.Method.invoke(Unknown Source)
	at org.eclipse.equinox.launcher.Main.invokeFramework(Main.java:659)
	at org.eclipse.equinox.launcher.Main.basicRun(Main.java:595)
	at org.eclipse.equinox.launcher.Main.run(Main.java:1501)
Caused by: java.lang.ClassNotFoundException: An error occurred while automatically activating bundle com.genuitec.eclipse.core (996).
	at org.eclipse.osgi.internal.hooks.EclipseLazyStarter.postFindLocalClass(EclipseLazyStarter.java:126)
	at org.eclipse.osgi.internal.loader.classpath.ClasspathManager.findLocalClass(ClasspathManager.java:557)
	at org.eclipse.osgi.internal.loader.ModuleClassLoader.findLocalClass(ModuleClassLoader.java:331)
	at org.eclipse.osgi.internal.loader.BundleLoader.findLocalClass(BundleLoader.java:395)
	at org.eclipse.osgi.internal.loader.sources.SingleSourcePackage.loadClass(SingleSourcePackage.java:39)
	at org.eclipse.osgi.internal.loader.sources.MultiSourcePackage.loadClass(MultiSourcePackage.java:35)
	at org.eclipse.osgi.internal.loader.BundleLoader.findClassInternal(BundleLoader.java:469)
	at org.eclipse.osgi.internal.loader.BundleLoader.findClass(BundleLoader.java:422)
	at org.eclipse.osgi.internal.loader.BundleLoader.findClass(BundleLoader.java:414)
	at org.eclipse.osgi.internal.loader.ModuleClassLoader.loadClass(ModuleClassLoader.java:153)
	at java.lang.ClassLoader.loadClass(Unknown Source)
	at com.genuitec.eclipse.theming.core.util.LicenseInfoUtil.getUserTypeFromCore(LicenseInfoUtil.java:25)
	at com.genuitec.eclipse.theming.core.util.LicenseInfoUtil.getUserType(LicenseInfoUtil.java:19)
	at com.genuitec.eclipse.theming.ui.welcome.DevStyleStartup.earlyStartup(DevStyleStartup.java:57)
	