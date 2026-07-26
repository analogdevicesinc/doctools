<!-- lastmod 2022-08-02 -->
## MAX20419 Evaluation Kit

## General Description

The MAX20419 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX20419ATGB/V+ power-management IC (PMIC). The EV kit includes three high-efficiency, low-voltage DC-DC converters: OUT1 boosts a 3.3V input to 5V at up to 750mA, while two synchronous step-down  converters  (OUT2,  OUT3)  provide  output  voltages of 2.3V and 1.25V up to 2A. The 2.2MHz switching-frequency operation allows for the use of all-ceramic capacitors and minimizes external components.

The EV kit features three on/off jumper controls and three reset outputs to indicate output status for each converter. The EV kit also provides a SYNC input to select the operating mode (PWM, skip, or external synchronization), and an open-drain power-good output ( PV\_OV )  that  asserts when the input supply voltage is 3.7% above or below the target input voltage.

## Features

- 3.0V to 5.5V Operating Supply Voltage
- 5V at 750mA Synchronous Boost Converter (OUT1)
- 1.25V at 2A Synchronous Buck Converter (OUT2)
- 2.3V at 2A Synchronous Buck Converter (OUT3)
- Programmable Windowed Watchdog
- SYNC Mode Select/Input for Forced-PWM (FPWM) and Skip-Mode Selection, or External Frequency Synchronization
- Individual RESET\_ Outputs
- PV\_OV Input Power-Good Indicator
- Minimized External Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20419

## Quick Start

## Required Equipment

- MAX20419 EV kit
- Variable 6V power supply capable of supplying 5A
- Electronic load
- Two voltmeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Preset the power supply to 3.3V. Turn off the power supply.
- 2) Preset  the  electronic  load  to  750mA.  Turn  off  the electronic load.
- 3) Connect the positive lead of the power supply to the VSUP PCB pad.  Connect  the  negative  lead  of  the power supply to the PGND PCB pad.
- 4) Connect the positive terminal of the electronic load to the VOUT1 PCB pad. Connect the negative terminal of the electronic load to the PGND1 PCB pad.
- 5) Enable  the  outputs  (OUT1-OUT3)  by  installing  the shunts on jumpers EN1-EN3.
- 6) Install a shunt on SYNC1 to enable  FPWM operation.
- 7) Turn on the power supply.
- 8) Verify  that  voltage  across  the  VOUT1  and  PGND1 PCB pads is 5V ±1%.
- 9) Verify  that  voltage  across  the RESET1 and  PGND PCB pads is 3.3V.
- 10) Turn on the electronic load.
- 11) Verify  that  voltage  across  the  VOUT1  and  PGND1 PCB pads is 5V ±2%.

<!-- image -->

## MAX20419 Evaluation Kit

- 12) Turn off the electronic load.
- 13) Remove  the  electronic  load  from  the  VOUT1  and PGND1 PCB pads.
- 14) Connect the positive terminal of the electronic load to the VOUT2 PCB pad. Connect the negative terminal of the electronic load to the PGND2 PCB pad. Preset the electronic load to 2A.
- 15) Verify  that  voltage  across  the  VOUT2  and  PGND2 PCB pads is 2.3V ±2%.
- 16) Verify  that  voltage  across  the RESET2 and  PGND PCB pads is 3.3V.
- 17) Turn on the electronic load.
- 18) Verify  that  voltage  across  the  VOUT2  and  PGND2 PCB pads is 2.3V ±3%.
- 19) Turn off the electronic load.
- 20) Remove  the  electronic  load  from  the  VOUT2  and PGND2 PCB pads.
- 21) Connect the positive terminal of the electronic load to the VOUT3 PCB pad and the negative terminal of the electronic  load  to  the  PGND3  PCB  pad.  Preset  the electronic load to 2A.
- 22) Verify  that  voltage  across  the  VOUT3  and  PGND3 PCB pads is 1.25V ±2%.
- 23) Verify  that  voltage  across  the RESET3 and  PGND PCB pads is 3.3V.
- 24) Turn on the electronic load.
- 25) Verify  that  voltage  across  the  VOUT3  and  PGND3 PCB pads is in the range of 1.25V ±3%.
- 26) Turn off the electronic load.
- 27) Turn off the power supply.

## Detailed Description

The  MAX20419  EV  kit  integrates  three  high-efficiency, low-voltage  DC-DC converters: OUT1 is a synchronous boost  converter  that  boosts  a  3.3V  input  to  5.0V  at  up to 750mA, while two synchronous step-down converters (OUT2, OUT3) provide output voltages of 2.3V and 1.25V. OUT1-OUT3 can be enabled/disabled by the EN1-EN3 jumpers,  respectively.  The  status  of  input  voltage  and output voltages can be indicated by PV\_OV and RESET1 -RESET3 .

## Operation Mode

The EV kit features a jumper (SYNC1) to configure the device  operation  mode.  Install  a  shunt  on  SYNC1  to enter  FPWM  mode.  Remove  the  shunt  on  SYNC1  to enable skip mode under light-load conditions. Connect an external  clock  with  1.8MHz  to  2.6MHz  frequency  to synchronize  the  internal  oscillator  to  an  external  clock. Table 1 summarizes the functions of SYNC1.

## Enable Control (EN1 -EN3)

The  EN1-EN3  jumpers  are  used  to  enable  or  disable OUT1-OUT3, respectively. Install shunts on EN1, EN2, or EN3 to enable OUT1, OUT2, or OUT3 for normal operation. Remove the shunts on EN1-EN3 to enter shutdown mode. See Table 2 for enable control.

## Table 1. Operation Mode (SYNC1)

| SHUNT POSITION                                    | MODE                          |
|---------------------------------------------------|-------------------------------|
| ON                                                | FPWM                          |
| OFF                                               | Skip                          |
| OFF (an external clock connected to SYNC PCB pad) | Synchronize to external clock |

## Table 2. Enable Control (EN1 -EN3)

| SHUNT POSITION   | MODE             |
|------------------|------------------|
| ON               | Normal operation |
| OFF              | Shutdown         |

│

## Evaluates: MAX20419

## Reset Outputs ( RESET1 -RESET3 )

The EV kit also includes three RESET\_ outputs to monitor  OUT1-OUT3.  The RESET\_ output  becomes  high impedance  and  is  pulled  to  the  supply  voltage  when the  corresponding  output  voltage  is  within  the  specified undervoltage/overvoltage (UV/OV) range. RESET\_ goes low when the corresponding output voltage is outside the specified UV/OV range.

## Power-Good Output ( PV\_OV )

The  EV  kit  provides  the PV\_OV output  to  monitor  the supply  voltage. PV\_OV becomes  low  impedance  when the supply voltage   is 3.7% above or below its target input voltage.  It  can  be  used  to  disable  the  upstream  supply when an overvoltage is detected.

Evaluates: MAX20419

## Watchdog Input (WDI)

The EV kit features a programmable windowed watchdog that  asserts RESET\_ low  for  t HOLD  when  a  watchdog update violation occurs. Remove the WDS jumper to evaluate the watchdog operation. See Table 3 for watchdog control. Refer to the MAX20419 IC data sheet for details.

## Table 3. Watchdog Control (WDS)

| SHUNT POSITION   | MODE             |
|------------------|------------------|
| ON               | Disable watchdog |
| OFF              | Enable watchdog  |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20419EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX20419 Evaluation Kit

## MAX20419 EV Kit Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                                     |
|--------------------------|-------|-------------------------------------------------------------------------------------------------|
| C1                       |     1 | 10μF 16V X6S Ceramic Capacitor (0805) Murata GRT21BC81C106KE01L                                 |
| C2, C3                   |     2 | 47μF 4V X6S Ceramic Capacitor (0805) Murata GRT21BC80G476ME13L                                  |
| C4                       |     1 | 47μF 16V Aluminum Capacitor Panasonic EEEFC1C470P                                               |
| C5, C6                   |     2 | 4.7μF 16V X7R Ceramic Capacitor (1206) TDK CGA5L3X7R1C475K160AB                                 |
| C7                       |     1 | 1μF 16V X7R Ceramic Capacitor (0603) TDK C1608X7R1C105K080AC                                    |
| C9, C13                  |     2 | Not Installed (0603)                                                                            |
| C10, C14                 |     1 | Not Installed (0805)                                                                            |
| C11                      |     1 | 4.7μF 16V X6S Ceramic Capacitor (0603) Murata GRT188C81C475ME13D                                |
| C12                      |     1 | 1nF 50V X7R Ceramic Capacitor (0603) TDK CGA3E2X7R1H102K080AA                                   |
| EN1, EN2, EN3, SYNC, WDS |     5 | 2-Pin Header 0.1' Sullins: PEC36SAAN or Equivalent                                              |
| --                       |     5 | Shunt, 2 POSITION Sullins: STC02SYAN or Equivalent                                              |
| L1                       |     1 | 2.2μH Inductor TDK TFM252012ALMB2R2MTAA                                                         |
| L2, L3                   |     2 | 1μH Inductor TDK TFM252012ALMA1R0MTAA                                                           |
| R1                       |     1 | 10Ω 1% Resistor (0603)                                                                          |
| R8, R9, R10, R11         |     6 | 20kΩ 1% Resistor (0603)                                                                         |
| R2, R4, R6, R7           |     2 | 0Ω 1% Resistor (0603)                                                                           |
| R3, R5, R12              |     0 | Not Installed (0603)                                                                            |
| U1                       |     1 | 2.2MHz Sync Boost and Dual Step-Down Converter PMIC Maxim MAX20419ATGB/V+ (TQFN 4mm×4mm×0.75mm) |
| --                       |     1 | PCB: MAX2001419 Evaluation Kit+                                                                 |
| --                       |    14 | Test Point without Base Keystone Electronics 5020                                               |

│

Evaluates: MAX20419

## MAX20419 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX20419

## MAX20419 EV Kit PCB Layout Diagrams

MAX20419 EV Kit Component Placement Guide---Top Layer

<!-- image -->

MAX20419 EV Kit PCB Layout---Layer 2 (ground layer)

<!-- image -->

MAX20419 EV Kit PCB Layout---Layer 3 (ground layer)

<!-- image -->

MAX20419 EV Kit Component Placement Guide---Bottom Layer

<!-- image -->

│

## MAX20419 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserYes the riJht to chanJe the circuitry and speci¿cations without notice at any time.

<!-- image -->

│

Evaluates: MAX20419