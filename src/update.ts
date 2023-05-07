function update(scriptName: string) {
  try {
    const updateUrl = `https://rk.tica.fun/update?scriptName=${scriptName}`;
    const updateCode = org.jsoup.Jsoup.connect(updateUrl)
      .ignoreContentType(true)
      .get()
      .text()
      .split('////');

    const botCode = updateCode[0];
    const moduleCode = updateCode[1];

    const botFilePath = new java.io.File(
      com.xfl.msgbot.utils.SharedVar.Companion.getBotsPath(),
      `${scriptName}/${scriptName}.js`,
    ).toString();
    const moduleFilePath = new java.io.File(
      com.xfl.msgbot.utils.SharedVar.Companion.getBotsPath(),
      `${scriptName}/modules/update.js`,
    ).toString();

    FileStream.write(
      botFilePath,
      botCode.replace(/\$SCRIPT_NAME/gi, scriptName),
    );
    FileStream.write(
      moduleFilePath,
      moduleCode.replace(/\$SCRIPT_NAME/gi, scriptName),
    );
  } catch (err: any) {
    Log.e(err);
  }
}

update('$SCRIPT_NAME');
