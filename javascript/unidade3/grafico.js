function grafico(parametros) {

    let svg = d3
        .select(parametros.seletor)
        .attr('width', parametros.largura)
        .attr('height', parametros.altura)

    let larguraPlotagem = parametros.largura - 40;
    let alturaPlotagem = parametros.altura - 40;


    let plotagem = svg
        .append('g')
        .attr('width', larguraPlotagem)
        .attr('height', alturaPlotagem)
        .attr('transform', 'translate(20,20)');
    let fnX = d3
        .scaleLinear()
        .domain([0, d3.max(parametros.dados)])
        .range([0, larguraPlotagem]);

    let fnY = d3
        .scaleLinear()
        .domain([0, parametros.dados.length])
        .range([0, alturaPlotagem]);
    plotagem
        .selectAll('.barra')
        .data(parametros.dados)
        .enter()
        .append('rect')
        .classed('barra', true)
        .attr('x', 0)
        .attr('y', (d, i) => fnY(i))
        .attr('width', (d) => fnX(d))
        .attr('height', fnY(1) * 0.9)
    plotagem
        .selectAll('.rotulo')
        .data(parametros.dados)
        .enter()
        .append('text')
        .classed('rotulo', true)
        .text((d) => d)
        .attr('x', (d) => fnX(d))
        .attr('dx', -7)
        .attr('y', (d, i) => fnY(i))
        .attr('dy', (d, i) => fnY(1) * 0.6);

}
