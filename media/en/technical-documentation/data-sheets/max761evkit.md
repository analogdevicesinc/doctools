<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX761 evaluation kit (EV kit) provides a 12V output for programming flash memories and powering other circuitry.  From 5V inputs, it provides better than 85% efficiency for 4mA to 200mA loads.  Quiescent supply current is only 300µA from a 5V input, and drops to  1µA in logic-controlled shutdown.  The MAX761 comes in an 8-pin SO package and uses tiny external components; the entire circuit fits into less than 0.3in 2 .

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                       |
|--------------------|-------|-----------------------------------------------------------------------------------|
| C1, C2             |     2 | 22µF ±10%, 20V tantalum capacitors, (C case) AVX TPSC226K020R0150                 |
| C3, C5             |     2 | 0.1µF ±5%, 50V ceramic capacitors (1206) AVX 12065C104JAT2A Murata GRM31C5C1H104J |
| C4                 |     0 | Not installed, capacitor                                                          |
| D1                 |     1 | 30V, 1A Schottky diode (SMT) Nihon EC10QS03L                                      |
| JU1, JU2           |     0 | Not installed-shorted by PC trace                                                 |
| JU3                |     1 | 3-pin header                                                                      |
| L1                 |     1 | 18µH, 0.8A inductor (SMT) Sumida CR43NP-180MC                                     |
| R1, R2, R4, R5, R6 |     0 | Not installed, resistors                                                          |
| R3                 |     0 | Not installed, resistor-shorted by PC trace                                       |
| U1                 |     1 | MAX761CSA+ (8-pin SO)                                                             |
| -                  |     1 | Shunt                                                                             |
| -                  |     1 | PCB: MAX761 Evaluation Kit+                                                       |

## Component Suppliers

| SUPPLIER                      | PHONE        | WEBSITE                        |
|-------------------------------|--------------|--------------------------------|
| AVX Corp.                     | 843-946-0238 | www.avxcorp.com or www.avx.com |
| Murata Mfg. Co., Ltd.         | 770-436-1300 | www.murata.com                 |
| Nihon Inter Electronics Corp. | 847-843-7500 | www.niec.co.jp                 |
| Sumida Corp.                  | 847-545-6700 | www.sumida.com                 |

Note : Indicate that you are using the MAX761 when contacting these component suppliers.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 2V to 12V Input Range for 12V Output
- ♦ 85% Efficiency for 4mA to 200mA Loads
- ♦ 1µA Shutdown Supply Current
- ♦ Small External Components
- ♦ Low-Battery Detector
- ♦ Current-Limited PFM Control Scheme
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX761EVKIT-SO+ | EV Kit |

## EV Kit

<!-- image -->

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX761 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(MAX761 EV kit, TA = +25°C, unless otherwise noted.)

<!-- image -->

<!-- image -->

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## SHDN RESPONSE TIME

I LOAD = 100mA, V IN  = 5V A: V OUT,   2V/div B: SHDN,  2V/div  (0V TO 4V)

<!-- image -->

The MAX761 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 5V power supply to the pad marked VIN. Connect ground to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) For normal operation, place the shunt across pins 1 and 2 on the JU3 jumper.
- 4) Turn on the power supply and verify that the output voltage is 12V.
- 5) Instructions for modifying the board for different output  voltages  are  in  the Output  Voltage Adjustment section.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Bootstrapped Mode

The MAX761 EV kit is configured for bootstrapped mode.  In bootstrapped mode, the MAX761 is powered from the output voltage, which increases efficiency at lower input voltages and requires fewer components. Refer to the Bootstrapped/Non-Bootstrapped Mode section of the MAX761 IC data sheet for further details.  For an adjustable output in bootstrapped mode, refer to the Output Voltage Adjustment section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Shutdown Control

The MAX761 provides a SHDN pin to disable the output.  Table 1 lists the options available for the shutdown control jumper, JU3.  To use an external control signal, remove the shunt on JU3 completely and connect the external signal to the pad labeled SHDN.  SHDN is a TTL/CMOS-logic-level input.

Table 1.  Jumper JU3 Functions

| SHUNT POSITION   | SHDN PIN          | MAX761 OUTPUT                     |
|------------------|-------------------|-----------------------------------|
| 1-2              | Connected to GND  | MAX761 Enabled V OUT = 12V        |
| 2-3              | Connected to V IN | Shutdown Mode V OUT = V IN - 0.3V |

## Low-Battery Indicator

The MAX761 provides a low-battery comparator that compares the voltage on LBI to the 1.5V reference voltage. LBO, an open-drain output, goes low when the LBI

## MAX761 Evaluation Kit

voltage falls below VREF.  Resistors R3 and R4 form a voltage divider between the LBI pad and the MAX761 LBI pin. Refer to the Low-Battery Detector section of the MAX761 data sheet for instructions on selecting values for R3 and R4.  Note that the printed-circuit board (PCB) trace  across R3 shorts the LBI pin to ground when this function is not used. Cut this trace before installing R3. Install a 100k Ω pullup resistor between VIN (R5) or VOUT (R6) if LBO is used. LBO is disabled in shutdown mode.

## Output-Voltage Adjustment

To adjust the output voltage, add output-voltage-divider resistors R1 and R2 to either bootstrapped or nonbootstrapped configurations. Refer to the Setting the Output Voltage section in the MAX761 IC data sheet for instructions on selecting values for R1 and R2.  When using output voltage-divider resistors, disconnect the MAX761 feedback pin (FB) from ground by cutting the thin PCB trace between the pads of JU1.  Some users may want to install a small (100pF to 200pF) capacitor (C4) to increase light-load efficiency.

<!-- image -->

Figure 1. MAX761 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX761 Evaluation Kit

Figure 2. MAX761 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX761 EV Kit PCB Layout-Component Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-4

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

<!-- image -->

Figure 3. MAX761 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5. MAX761 EV Kit PCB Layout-Solder Side

<!-- image -->