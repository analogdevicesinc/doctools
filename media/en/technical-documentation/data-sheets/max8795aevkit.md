<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX8795A evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that contains a step-up switching regulator, a positive charge pump postregulated by a high-voltage linear regulator, a negative charge pump postregulated by a high-voltage negative linear regulator, and five high-current operational amplifiers (op amps). The primary step-up converter is configured for a +14V output (VMAIN) and provides at least 500mA from a +4.5VDC supply voltage.

The positive and negative linear-regulator controllers postregulate the charge-pump outputs for TFT gate-on and gate-off supplies. The positive linear regulator is set to +25V output (VPOS) and provides at least 20mA. The negative linear regulator is set to -10V output (VNEG) and provides at least 50mA. Power to the positive charge-pump input comes from the step-up switching-regulator output, while power to the negative charge-pump input comes from the power ground.

The EV kit also features five high-performance op amps designed to drive the LCD backplane (VCOM). Power to the VCOM buffers comes from the step-up switching regulator output. The MAX8795A EV kit demonstrates low quiescent current and high efficiency for maximum battery life.  High-frequency (1.2MHz) operation allows the use of tiny surface-mount components to minimize the thickness of LCD panel designs.

| DESIGNATION     |   QTY | DESCRIPTION                                                                                |
|-----------------|-------|--------------------------------------------------------------------------------------------|
| C1              |     1 | 100µF ±20%, 16V aluminum electrolytic capacitor SANYO 16ME100UAX (DxL = 6.3mm x 5mm)       |
| C2, C3          |     2 | 10µF ±10%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106K Taiyo Yuden JMK212BJ106MG |
| C4, C5, C6      |     3 | 4.7µF ±10%, 25V X7R ceramic capacitors (1206) TDK C3216X7R1E475K Taiyo Yuden TMK316BJ475KL |
| C7-C12, C16-C21 |    12 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K Murata GRM188R71H104K     |
| C13             |     0 | Not installed, ceramic capacitor                                                           |

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Features

- ♦ +4.5V to +5.5V Input Range
- ♦ Output Voltages
- +14V, 500mA (VMAIN)
- +25V, 20mA (VPOS)
- -10V, 50mA (VNEG)
- ♦ Adjustable Output Voltages (External Resistors)
- ♦ 1.2MHz Switching Frequency
- ♦ Five High-Performance Op Amps 130mA (Typ) Short-Circuit Current (Buffers)
- ♦ Low-Profile Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE              |
|----------------|---------------|-------------------------|
| MAX8795AEVKIT+ | 0°C to +70°C* | 32 Thin QFN (5mm x 5mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                 |
|---------------|-------|---------------------------------------------------------------------------------------------|
| C14, C24      |     2 | 0.22µF ±10%, 50V X7R ceramic capacitors (0805) Taiyo Yuden UMK212BJ224KT TDK C2012X7R1H224K |
| C15           |     1 | 0.22µF ±10%, 16V X7R ceramic capacitor (0603) TDK C1608X7R1C224K Taiyo Yuden EMK107BJ224KA  |
| C22           |     1 | 1.5nF ±10%, 50 X7R ceramic capacitor (0603) TDK C1608X7R1H152K Taiyo Yuden UMK107B152KZ     |
| C23           |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E333K or TDK C1608X7R1E333K  |

1

## MAX8795A Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------|
| C25           |     1 | 220pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221K                                                                           |
| C26-C29       |     0 | Not installed, ceramic capacitors (0603)                                                                                                  |
| C30           |     1 | 68pF ±5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H680J Taiyo Yuden UMK107CG680JZ                                                   |
| D1            |     1 | 30V, 3A Schottky diode (M-Flat) Toshiba CMS02 30V, 2.2A Schottky diode Nihon EC20QS03L                                                    |
| D2, D3        |     2 | 100V, 200mA dual ultra-fast diodes (SOT23) Fairchild MMBD4148SE (Top Mark: D4) Central Semiconductor CMPD1001S, lead free (Top Mark: L21) |
| JU1, JU2      |     2 | 2-pin headers                                                                                                                             |
| L1            |     1 | 3.3µH, 2.5A low-profile inductor Sumida CDRH5D16NP-3R3 TOKO FDV0620-3R3M Würth S06100031                                                  |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                           |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------------------------|
| Q1            |     1 | 40V, 200mA pnp bipolar transistor (SOT23) Central Semiconductor CMPT3906, lead free (Top Mark: C2A) Fairchild MMBT3906 (Top Mark: 2A) |
| Q2            |     1 | 40V, 200mA npn bipolar transistor (SOT23) Central Semiconductor CMPT3904, lead free (Top Mark: C1A) Fairchild MMBT3904 (Top Mark: 1A) |
| R1            |     1 | 137k Ω ±1% resistor (0603)                                                                                                            |
| R2            |     1 | 13.3k Ω ±1% resistor (0603)                                                                                                           |
| R3            |     1 | 191k Ω ±1% resistor (0603)                                                                                                            |
| R4            |     1 | 10k Ω ±1% resistor (0603)                                                                                                             |
| R5, R6        |     2 | 6.8k Ω ±5% resistors (0603)                                                                                                           |
| R7            |     1 | 324k Ω ±1% resistor (0603)                                                                                                            |
| R8            |     1 | 31.6k Ω ±1% resistor (0603)                                                                                                           |
| R9            |     1 | 180k Ω ±5% resistor (0603)                                                                                                            |
| R10-R20       |    11 | 100k Ω ±5% resistors (0603)                                                                                                           |
| R21           |     1 | 10 Ω ±5% resistor (0603)                                                                                                              |
| R22-R26       |     5 | Not installed, resistors-short PC trace (0603)                                                                                        |
| R27           |     1 | 1k Ω ±5% resistor (0603)                                                                                                              |
| U1            |     1 | MAX8795AETJ+ (32-pin TQFN, 5mm x 5mm)                                                                                                 |
| -             |     1 | Shunt, 0.1in centers                                                                                                                  |
| -             |     1 | PCB: MAX8795A Evaluation Kit+                                                                                                         |

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE               |
|---------------------------------------------|--------------|-----------------------|
| Central Semiconductor Corp.                 | 516-435-1110 | www.centralsemi.com   |
| Fairchild Semiconductor                     | 408-822-2000 | www.fairchildsemi.com |
| Murata Mfg. Co., Ltd.                       | 770-436-1300 | www.murata.com        |
| Nihon Inter Electronics Corp.               | 661-867-2555 | www.niec.co.jp        |
| SANYO North America Corp.                   | 619-661-6322 | www.sanyodevice.com   |
| Sumida Corp.                                | 708-956-0666 | www.sumida.com        |
| Taiyo Yuden                                 | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.                                   | 847-390-4373 | www.component.tdk.com |
| TOKO America, Inc.                          | 847-297-0070 | www.tokoam.com        |
| Toshiba America Electronic Components, Inc. | 949-455-2000 | www.toshiba.com/taec  |
| Würth Electronik GmbH & Co., KG             | 201-785-8800 | www.we-online.com     |

Note: Indicate that you are using the MAX8795A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8795A Evaluation Kit

## Quick Start

## Recommended Equipment

- 4.5V to 5.5VDC, 5A power supply
- Digital multimeters

## Jumper Selection

## Dummy Load for the High-Voltage Switch Output (COM)

The MAX8795A EV kit features a capacitive dummy load of 1.5nF (C22) at the COM output pad to simulate a panel load to test the switch matrix. Jumper JU1 selects and deselects the dummy load. Table 1 lists jumper JU1 options.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | DUMMY LOAD (C22)   | EV KIT FUNCTION               |
|------------------|--------------------|-------------------------------|
| Installed        | Connected to COM   | Testing mode (no panel)       |
| Not installed*   | Unconnected        | Normal operation (panel load) |

## High-Voltage Switch Control Input (CTL)

Using a 2-pin jumper (JU2), the MAX8795A EV kit features an option to control the high-voltage switches between SRC, COM, and DRN. The switch between the SRC and COM pins, and the switch between the COM and DRN pins can also be controlled by an external TTL logic source connected to the CTL pad. See Table 2 for switch states and refer to the Switch-Control Block section in the MAX8795A IC data sheet for further information about the high-voltage switches connected to the COM pin.

## Table 2. Jumper JU2 Functions

| SHUNT POSITION   | CTL PIN                               | MAX8795A COM OUTPUT                                                            |
|------------------|---------------------------------------|--------------------------------------------------------------------------------|
| Installed        | Connected to VIN                      | COM connected to SRC (+25V)                                                    |
| Not installed*   | Connected to GND through resistor R10 | COM connected to DRN (+14V)                                                    |
| Not installed    | Connected to external TTL source      | TTL = logic-low (COM connected to DRN) TTL = logic-high (COM connected to SRC) |

## Procedure

The MAX8795A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the positive terminal of the DC power supply to the VIN pad. Connect the negative terminal of the DC power supply to the PGND pad.
- 2) Verify  that  a  shunt  is  placed  across  jumper  JU1. Verify  that  there  is  no  shunt  placed  across  jumper JU2.
- 3) Turn on the power supply and verify that the stepup regulator output (VMAIN) is approximately +14V.
- 4) Verify that the positive linear-regulator output (VPOS) is approximately +25V.
- 5) Verify that the negative linear-regulator output (VNEG) is approximately -10V.
- 6) Verify that all buffer outputs (OUT1-OUT 5) are approximately +7V.

## Detailed Description

The MAX8795A EV kit includes a high-performance boost converter, two linear-regulator controllers, and five  high-current  op  amps  optimized for complete TFT LCD power requirements. The main supply step-up switching circuit, which is powered from a +5V supply and switches at 1.2MHz, provides a +14V output with at least 500mA.

For regulated TFT gate-on supply, the EV kit employs a positive single-stage charge pump and a linear postregulator that provides +25V output (VPOS) and supplies at least 20mA. For regulated TFT gate-off supply, the EV kit employs a negative single-stage charge pump and a linear postregulator that provides -10V output and supplies at least 50mA.

The EV kit also features five high-current op amps that are ideal for driving the capacitive backplane of TFT LCD panels. Each buffer is set to one-half of the main supply output through external resistor-dividers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8795A Evaluation Kit

## Output Voltage Selection

## Step-Up Switching-Regulator Output Voltage (VMAIN)

The MAX8795A EV kit's step-up switching-regulator output, limited by the built-in 20V n-channel MOSFET, is set to +14V through feedback resistors R1 and R2. To generate output voltages other than +14V (1.2 x VIN to +18V), select different external voltage-divider resistors (R1 or R2). Refer to the Output-Voltage Selection section in the MAX8795A IC data sheet for instructions on selecting the feedback resistors.

## Positive Linear-Regulator Output Voltage (VPOS)

The MAX8795A EV kit's positive linear-regulator output is  set  to  +25V  by  feedback  resistors  R3  and  R4.  To generate output voltages other than +25V (+1.25V to nearly the positive charge-pump output voltage), select different  external  voltage-divider  resistors  (R3  or  R4).

Refer to the Output-Voltage Selection section in the MAX8795A IC data sheet for instructions on selecting the resistors.

## Negative Linear-Regulator Output Voltage (VNEG)

The MAX8795A EV kit's negative linear-regulator output is set to -10V by feedback resistors R7 and R8. To generate output voltages other than -10V (0 to nearly the negative charge-pump output), select different external voltage-divider resistors (R7 or R8). Refer to the Output-Voltage Selection section in the MAX8795A IC data sheet for instructions on selecting the resistors.

## Op-Amp Output Voltages (OUT1-OUT5)

The MAX8795A EV kit's op amps (OUT1-OUT5) are designed to drive the LCD backplane. Using external voltage-divider resistors, each op amp is configured to one-half of VMAIN's output voltage. To generate output voltages other than +7V, select different external voltage-divider resistors (R11-R20).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8795A Evaluation Kit

Figure 1. MAX8795A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8795A Evaluation Kit

Figure 2. MAX8795A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8795A Evaluation Kit

<!-- image -->

Figure 3. MAX8795A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8795A Evaluation Kit

Figure 4. MAX8795A EV Kit PCB Layout-Internal Layer 2 (GND Plane)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8795A Evaluation Kit

<!-- image -->

Figure 5. MAX8795A EV Kit PCB Layout-Internal Layer 3 (Signal/GND Plane)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8795A Evaluation Kit

Figure 6. MAX8795A EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

CARDENAS