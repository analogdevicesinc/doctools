// My core

module core #(

  parameter       ONE = 1,
  parameter       TWO=2,

  parameter DATA_PATH_WIDTH = LINK_MODE == 2 ? 8 : 4,

  parameter       A_STRING = "Sample String",
  parameter integer A_NUMBER = 123,
  parameter [3:0] FOUR_BITS = 4'b0011
) (
  input  clk,
  input  resetn,

  output out,
  input  in
);

endmodule
