<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates:  MAX17019 MAX17019 Evaluation Kit

## General Description

Features

The  MAX17019  evaluation  kit  (EV  kit)  presents  the MAX17019 high input-voltage quad-output controller in a typical application setup. The EV kit operates from a 5.5V to 38V input range.

High-voltage controller A is used to generate a 5V rail that serves as supply for the other three rails. These rails are generated  by  two  switching  converters  (rails  B  and  C), and one push-pull linear regulator (rail D). The supplies for converters B and C and regulator D are accessible but must be less than 6V.

The  MAX17019  also  has  an  internal  fixed  5V  linear regulator capable of supplying 50mA. The EV kit operates at 0.5MHz (VOUTA and VOUTC) and at 1MHz switching frequency  (VOUTB).  The  EV  kit  has  superior  line-  and load-transient response.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17019EVKIT+ | EV Kit |

- S 5.5V to 38V Input Range with 42V Transient Capability
- S Internal 5V Linear Regulator with 50mA Load Capability
- S Output Voltages
- S Four Power-Good LEDs Help Monitor the Output Voltages
- S 0.5MHz Switching Frequency (5V and 1.2V Outputs)
- S 1MHz Switching Frequency (3.3V Output)
- S Independent Enable Inputs and Power-Good Outputs
- S Overvoltage and Undervoltage Fault Protection
- S Thermal-Fault Protection
- S 48-Pin (6mm x 6mm) Thin QFN Package
- S Fully Assembled and Tested

VOUTA: 5V Up to 4A Peak Current, Adjustable from 1V to 5.5V

VOUTB: 3.3V Up to 2.5A Peak Current, Adjustable from 0.75V to 4V

VOUTC: 1.2V Up to 4A Peak Current, Adjustable from 0.75V to 4V

VOUTD: 2.5V Up to 2A Current, Adjustable from 0.5V to VIND

## Component List

| DESIGNATION       |   QTY | DESCRIPTION                                                                                |
|-------------------|-------|--------------------------------------------------------------------------------------------|
| C1, C2            |     2 | 4.7 F F Q 10%, 50V X7R ceramic capacitors (1210) Murata GRM32ER71H475K AVX 12105C475KAT2A  |
| C3                |     1 | 22 F F, 50V aluminum electrolytic capacitor (6.3mm x 6mm) SANYO 50CE22KX                   |
| C4, C11, C20, C24 |     4 | 4.7 F F Q 10%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J475K Murata GRM188R60J475K |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                        |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------|
| C5, C25, C33  |     3 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J105K Taiyo Yuden JMK105BJ105MV Murata GRM155R60J105K |
| C6            |     1 | 1 m F Q 10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H105K                                                |

## Evaluates:  MAX17019 MAX17019 Evaluation Kit

## Component List (continued)

| DESIGNATION        |   QTY | DESCRIPTION                                                                                                            |
|--------------------|-------|------------------------------------------------------------------------------------------------------------------------|
| C7, C17, C21, C29  |     4 | 0.1 F F Q 10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K Taiyo Yuden LMK105BJ104KV Murata GRM155R60J104K    |
| C8, C12, C13       |     0 | Not installed, ceramic capacitors (0402)                                                                               |
| C9                 |     1 | 150 F F, 6.3V low-ESR capacitor (B case) SANYO 6TPE150MAZB NEC TOKIN PSLB0J157M(35)                                    |
| C10, C32, C35      |     0 | Not installed, ceramic capacitors (B case)                                                                             |
| C14                |     1 | 680pF Q 10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H681K Taiyo Yuden UMK105BJ681KW Murata GRM155R71H681K       |
| C15, C28, C36, C37 |     0 | Not installed, ceramic capacitors (0805)                                                                               |
| C16, C26, C34      |     3 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M or Taiyo Yuden AMK212BJ106MG Murata GRM21BR60J106M |
| C18, C30           |     2 | 1000pF Q 10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H102K Taiyo Yuden UMK105BJ102KW Murata GRM155R71H102K     |
| C19, C22           |     2 | 330 F F, 4V low-ESR capacitors (D case) SANYO 4TPF330ML (12m I ) NEC TOKIN PSLD0G337M(15)                              |
| C23                |     1 | 2200pF Q 10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H222K Taiyo Yuden UMK105BJ222KW Murata GRM155R71H222K      |
| C27                |     1 | 10 F F Q 10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106K Murata GRM21BR60J106K                               |

| DESIGNATION                   |   QTY | DESCRIPTION                                                                                                         |
|-------------------------------|-------|---------------------------------------------------------------------------------------------------------------------|
| C31                           |     1 | 0.22 F F Q 10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R0J224K Taiyo Yuden JMK105BJ224KV Murata GRM155R60J224K |
| C38                           |     1 | 100nF Q 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K Murata GRM188R71H104K                              |
| D1                            |     1 | 250mA, 50V Schottky diode (SOT323) Central Semi CMSSH-3E                                                            |
| D2-D5                         |     4 | Green surface-mount LEDs (0805)                                                                                     |
| JU1                           |     1 | 4-pin header                                                                                                        |
| L1                            |     1 | 4.7 F H, 7A, 20m I inductor (7mm x 7mm x 4mm) Würth 744311470                                                       |
| L2                            |     1 | 2.2 F H, 13A, 11.5m I inductor (7mm x 7mm x 4mm) Würth 744311220                                                    |
| L3                            |     1 | 1 F H, 6.8A, 14.2m I inductor (5.8mm x 6.2mm x 3mm) TOKO FDV0530-1R0M NEC TOKIN MPLC0525L1R0                        |
| N1-A, N1-B                    |     2 | Dual 60V n-channel MOSFETs (8 SO) Fairchild HUFA76413DK8T                                                           |
| POKA-POKD, REFIND, SYNC, VTTR |     7 | Test points                                                                                                         |
| R1                            |     1 | 10 I Q 5% resistor (0402)                                                                                           |
| R2, R21, R30, R31             |     4 | 0 I resistors (0402)                                                                                                |
| R3, R20, R24, R29             |     0 | Not installed, resistors (0402)                                                                                     |
| R4                            |     0 | Not installed, resistor (0603)                                                                                      |
| R5                            |     1 | 40.2k I Q 1% resistor (0603)                                                                                        |
| R6, R8, R10, R22, R23         |     5 | 10k I Q 1% resistors (0603)                                                                                         |
| R7                            |     1 | 34k I Q 1% resistor (0603)                                                                                          |
| R9                            |     1 | 6.04k I Q 1% resistor (0603)                                                                                        |
| R11-R14                       |     4 | 100k I Q 5% resistors (0402)                                                                                        |
| R15                           |     1 | 16.5k I Q 5% resistor (0402)                                                                                        |
| R16-R19                       |     4 | 4.02k I Q 5% resistors (0603)                                                                                       |

## MAX17019 Evaluation Kit

## Evaluates:  MAX17019

## Component Suppliers (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| R25           |     1 | 51 I Q 5% resistor (0402)                                       |
| R26           |     1 | 0.004 I Q 1% 1/4W resistor (1206) Vishay (Dale) WSL12064L000FEA |
| R27, R28      |     0 | Not installed, resistors-short (PC trace) (0612)                |
| R32           |     1 | 82.5k I Q 5% resistor (0402)                                    |
| R33           |     1 | 1k I Q 5% resistor (0603)                                       |

| DESIGNATION   |   QTY | DESCRIPTION                                             |
|---------------|-------|---------------------------------------------------------|
| SW1           |     1 | 5-position, low-profile DIP switch                      |
| U1            |     1 | Quad output controller (48 TQFN-EP*) Maxim MAX17019ATM+ |
| -             |     1 | PCB: MAX17019 EVALUATION KIT+                           |

## Component Suppliers

| SUPPLIER                       | PHONE        | WEBSITE                  |
|--------------------------------|--------------|--------------------------|
| Central Semiconductor Corp.    | 631-435-1110 | www.centralsemi.com      |
| Fairchild Semiconductor        | 888-522-5372 | www.fairchildsemi.com    |
| Murata Americas                | 770-436-1300 | www.murataamericas.com   |
| NEC TOKIN America, Inc.        | 408-324-1790 | www.nec-tokinamerica.com |
| SANYO NA Corp.                 | 619-661-6835 | www.sanyodevice.com      |
| Taiyo Yuden                    | 800-348-2496 | www.t-yuden.com          |
| TDK Corp.                      | 847-803-6100 | www.component.tdk.com    |
| TOKO America, Inc.             | 847-297-0070 | www.tokoam.com           |
| Vishay                         | 402-563-6866 | www.vishay.com           |
| Würth Electronik GmbH & Co. KG | 201-785-8800 | www.we-online.com        |

Note: Indicate that you are using the MAX17019 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX17019 EV kit
- 5.5V to 38V DC power supply
- Four digital multimeters (DMMs)
- 100MHz dual-trace oscilloscope

Set  SW1  (4,  7)  to  the  on  position  (ONC  =  VDD, VOUTC enabled).

Set  SW1  (5,  6)  to  the  on  position  (OND  =  VDD, VOUTD enabled).

- 3)  Connect the first DMM across the VOUTA and GND pads.
- 4)  Connect  the  second  DMM  across  the  VOUTB  and GND pads.
- 5)  Connect the third DMM across the VOUTC and GND pads.
- 6)  Connect the fourth DMM across the VOUTD and GND pads.
- 7)  Turn on the power supply and adjust input voltage to 12V.
- 8)  Set SW1 (1, 10) to the on position ( SHDN = VBATT, MAX17019 activated).
- 9)  All LEDs should be lit; verify that the output voltages are VOUTA = 5V, VOUTB = 3.3V, VOUTC = 1.2V, and VOUTD = 2.5V.

## Procedure

The  MAX17019 EV kit is  a  fully  assembled  and  tested surface-mount  board.  Follow  the  steps  below  to  verify board operation. Caution:  Do  not  turn  on  the  power supply until all connections are completed.

- 1)  Ensure that the circuit is connected correctly to the power supply and dummy loads prior to applying any power.
- 2)  Set SW1 (1, 10) to the off position ( SHDN = VBATT, MAX17019 disabled).

Set SW1 (2, 9) to the on position (ONA = VDD, VOUTA enabled).

Set SW1 (3, 8) to the on position (ONB = VDD, VOUTB enabled).

## Evaluates:  MAX17019 MAX17019 Evaluation Kit

## Troubleshooting

## Output Rails Do Not Come Up

The  MAX17019  output  rails  incorporate  undervoltage shutoff and stay off until the corresponding ON\_ switch is toggled. Make sure the supplies to the rails are high enough to allow it to regulate. Also check if the current limit on the power supply is set high enough for the initial startup current spike.

## Current Capability Seems Too Low

The current capability listed in the data sheet is the peak ripple current. DC current may be 30% lower. If the supply rails are cascaded, allow for lower external load currents. Also check the current limit on the power supply.

## Load Regulation Seems Low

The control algorithm in the MAX17019 utilizes a loadline architecture. This architecture improves stability and step  response  at  the  cost  of  a  weaker  load  response. It may be necessary to set the output voltage higher to fulfill accuracy requirements.

## Detailed Description of Hardware

## 5V Output-Voltage Setting (VOUTA)

The  MAX17019  EV  kit  is  shipped  with  FBA  connected to  resistors  R5  and  R6,  which  sets  the  VOUTA  voltage to 5V.

To  change  the  output  voltage  to  a  value  between  1V and 5.5V, remove R5. Calculate R5 using the following equation:

<!-- formula-not-decoded -->

where VFBA = 1V and R6 =10k I Q 1%. For an output voltage of 1V, place a short across R5 and leave R6 open.

## 3.3V Output-Voltage Setting (VOUTB)

The  MAX17019  EV  kit  is  shipped  with  FBB  connected to  resistors  R7  and  R8,  which  sets  the  VOUTB  voltage to 3.3V.

To change the output voltage to a value between 0.75V and  4V,  remove  R7.  Calculate  R7  using  the  following equation:

<!-- formula-not-decoded -->

where VFBB = 0.75V and R8 =10k I Q 1%. For an output voltage of 0.75V, place a short across R7 and leave R8 open.

## 1.2V Output-Voltage Setting (VOUTC)

The MAX17019 EV kit is shipped with FBC connected to resistors R9 and R10, which sets the VOUTC voltage to 1.2V.

To change the output voltage to a value between 0.75V and  4V,  remove  R9.  Calculate  R9  using  the  following equation:

<!-- formula-not-decoded -->

where VFBC = 0.75V and R10 =10k I Q 1%. For an output voltage of 0.75V, place a short across R9 and leave R10 open.

## 2.5V Output-Voltage Setting (VOUTD)

The MAX17019 EV kit is shipped with FBD connected to resistors  R22  and  R23,  which  sets  the  VOUTD  voltage to 2.5V. The voltage at FBD tracks the REFIND voltage, which is pulled up to the 1.25V reference output voltage VREF through resistor R33.

To change the VOUTD output voltage to a value between 0.5V and VIND, remove R22. Calculate R22 using the following equation:

<!-- formula-not-decoded -->

where VFBD = VREFIND = 1.25V and R23 =10k I Q 1%.

Make sure the internal losses PREGD = (VIND - VOUTD) x IOUTD do not violate the thermal limits of the IC (refer to the MAX17019 IC data sheet).

## Independent Enable Inputs and Power-Good Outputs

Separate  enable  inputs  and  independent  open-drain power-good  outputs  allow  flexible  power  sequencing. Switch SW1 is provided to control the ONA-OND enable inputs and the SHDN input. Table 1 summarizes SW1's function.

To display which of the outputs are in regulation, powergood LED indicators D2-D5 are also provided.

Table 1. Switch SW1 Settings

| SW1   | SW1   | PIN CONTROL                      | MAX17019 OUTPUT                                                |
|-------|-------|----------------------------------|----------------------------------------------------------------|
|       | Off   | SHDN pin is con- nected to GND   | Shutdown mode (all outputs disabled)                           |
|       | On    | SHDN pin is con- nected to VBATT | MAX17019 enabled (all outputs depend on SW1 position settings) |
|       | Off   | ONA pin is con- nected to GND    | Disables VOUTA, VOUTA = 0V                                     |
|       | On    | ONA pin is con- nected to VDD    | Enables VOUTA, VOUTA = 5V                                      |
|       | Off   | ONB pin is con- nected to GND    | Disables VOUTB, VOUTB = 0V                                     |
|       | On    | ONB pin is con- nected to VDD    | Enables VOUTB, VOUTB = 3.3V                                    |
|       | Off   | ONC pin is con- nected to GND    | Disables VOUTC, VOUTC = 0V                                     |
|       | On    | ONC pin is con- nected to VDD    | Enables VOUTC, VOUTC = 1.2V                                    |
|       | Off   | OND pin is con- nected to GND    | Disables VOUTD, VOUTD = 0V                                     |
|       | On    | OND pin is con- nected to VDD    | Enables VOUTD, VOUTD = 2.5V                                    |

Note: As configured, the MAX17019 EV kit is shipped with all SW1 settings in the off position.

## Frequency Selection (FREQ)

The switching frequency of the MAX17019 kit can  be adjusted  by  removing  resistor  R24  and  installing  a short  across  resistors  R20  or  R21.  As  configured,  the MAX17019  EV  kit  operates  at  0.5MHz  (VOUTA  and VOUTC)  and  at  1MHz  switching  frequency  (VOUTB). When  changing  the  switching  frequency,  refer  to  the MAX17019  IC  data  sheet  for  the  proper  component selections and calculations for the inductors and output capacitors.

## MAX1709 Evaluation Kit

## Evaluates:  MAX1709

Table 2. Switching-Frequency Selection

| FREQ PIN                                   | SWITCHING FREQUENCY   | SWITCHING FREQUENCY   | SWITCHING FREQUENCY   |
|--------------------------------------------|-----------------------|-----------------------|-----------------------|
|                                            | VOUTA                 | VOUTB                 | VOUTC                 |
| Connected to VDD through open resistor R24 | 250kHz                | 500kHz                | 250kHz                |
| Connected to REF through open resistor R20 | 375kHz                | 750kHz                | 375kHz                |
| Connected to GND through 0 I resistor R21* | 500kHz                | 1MHz                  | 500kHz                |

* Default position.

Table 3. Jumper JU1 Functions

| SHUNT POSITION   | IND CONNECTS TO REGULATOR                         |
|------------------|---------------------------------------------------|
| 1-2*             | VOUTA                                             |
| 1-3              | VOUTB                                             |
| 1-4              | VOUTC (only for custom setups with VOUTC > VOUTD) |

* Default position.

## Source/Sink Linear-Regulator Input (IND)

The MAX17019 EV kit includes a jumper (JU3) to select which  of  the  step-down  switching  regulators  (VOUTAVOUTC) powers the push-pull linear regulator (VOUTD).

By  default,  the  2.5V  VOUTD  output  stage  is  powered from  the  IND  input  when  a  shunt  is  installed  across jumper JU1 pins 1-2 or pins 1-3, but not pins 1-4.

A user may want to set up VOUTC to 2.5V and VOUTD to 1.25V for DDR RAM use. VOUTC can be set for 2.5V using the equation from the 1.2V Output-Voltage Setting (VOUTC) section.  For  DDR  RAM  applications,  VOUTD can  also  track  the  REFIND  voltage  to  provide  a  1.25V output. Remove R23 and replace R22 with a 0 I resistor. Under these  two  cases,  JU1  may  be  configured  to  all three settings.

## Evaluates:  MAX17019 MAX17019 Evaluation Kit

Figure 1. MAX17019 EV Kit Schematic

<!-- image -->

## Evaluates:  MAX17019 MAX17019 Evaluation Kit

<!-- image -->

Figure 2. MAX17019 EV Kit Component Placement GuideComponent Side

Figure 3. MAX17019 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX17019 EV Kit PCB Layout-Layer 2

<!-- image -->

## Evaluates:  MAX17019 MAX17019 Evaluation Kit

<!-- image -->

Figure 5. MAX17019 EV Kit PCB Layout-Layer 3

Figure 6. MAX17019 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX17019 EV Kit Component Placement GuideSolder Side

<!-- image -->

## MAX17019 Evaluation Kit

## Evaluates:  MAX17019

Features

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                       | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------|-----------------|
|                 0 | 9/09            | Initial release                                                   | -               |
|                 1 | 4/15            | Deleted automotive reference from the General Description section | 1               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.