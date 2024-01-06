describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Ava';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Ava');
  });

  it('should add a new server to the serverTable using updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();
    let serverList = document.querySelectorAll('#serverTable tbody tr td');
    expect(serverList.length).toEqual(3);
    expect(serverList[0].innerText).toEqual('Ava');
    expect(serverList[1].innerText).toEqual('$0.00');
    expect(serverList[2].innerText).toEqual('X');
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers= {};
  });
});
