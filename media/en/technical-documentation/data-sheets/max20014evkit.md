<!-- lastmod 2022-08-02 -->
## MAX20014 Evaluation Kit

## General Description

The MAX20014 evaluation kit (EV kit) is a fully assembled and tested PCB that demonstrates the MAX20014 power management IC (PMIC). The EV kit includes three highefficiency, low-voltage DC-DC converters: OUT1 boosts a 3.3V input to 5V at up to 500mA, while two synchronous step-down  converters  (OUT2,  OUT3)  provide  adjustable output  voltages  down  to  0.8V  at  up  to  3A.  The  2.2MHz switching-frequency  operation  allows  for  the  use  of  allceramic capacitors and minimizes external components.

The EV kits feature three on/off jumper controls, and three reset outputs to indicate output status for each converter. It also provides SYNC input to select the operating mode (PWM, skip, or external synchronization).

## Benefits and Features

- 3.0V to 5.5V Operating Supply Voltage
- 5V at 500mA  Synchronous Boost Converter (OUT1)
- 1.25V at 3A Synchronous Buck Converter (OUT2)
- 1.8V at 3A Synchronous Buck Converter (OUT3)
- Sync-Mode Select/Input for Forced-PWM/Skip Mode Selection or External Frequency Synchronization
- Individual RESET1 -RESET3 Outputs
- Minimal External Components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX20014 EV kit
- Variable 6V power supply capable of supplying 5A
- Electronic load
- Two voltmeters

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Preset the power supply to 3.3V. Turn off the power supply.
- 2) Preset  the  electronic  load  to  500mA.  Turn  off  the electronic load.
- 3) Connect the positive lead of the power supply to the VSUP PCB pad.  Connect  the  negative  lead  of  the power supply to the PGND PCB pad.
- 4) Connect the positive terminal of the electronic load to the VOUT1 PCB pad. Connect the negative terminal of the electronic load to the PGND1 PCB pad.
- 5) Enable outputs V OUT1 -V OUT3  by installing shunts on jumpers EN1-EN3.
- 6) Install  a  shunt  on  SYNC1  to  enable  forced-PWM (FPWM) operation.
- 7) Turn on the power supply.
- 8) Verify  that  voltage  across  the  VOUT1  and  PGND1 PCB pads is 5V ±1%.
- 9) Verify  that  voltage  across  the RESET1 and  PGND PCB pads is 3.3V.
- 10)  Turn on the electronic load.
- 11)  Verify  that  voltage  across  the  VOUT1  and  PGND1 PCB pads is 5V ±2%.
- 12) Turn off the electronic load.
- 13)  Remove  the  electronic  load  from  the  VOUT1  and PGND1 PCB pads.
- 14)  Connect the positive terminal of the electronic load to the VOUT2 PCB pad. Connect the negative terminal of the electronic load to the PGND2 PCB pad. Preset the electronic load to 3A.
- 15)  Verify  that  voltage  across  the  VOUT2  and  PGND2 PCB pads is 1.25V ±2%.
- 16)  Verify  that  voltage  the  across RESET2 and  PGND PCB pads is 3.3V.
- 17)  Turn on the electronic load.
- 18)  Verify  that  the  voltage  across  VOUT2  and  PGND2 pads is 1.25V ±3%.

<!-- image -->

Evaluates: MAX20014

## MAX20014 Evaluation Kit

- 19) Turn off the electronic load.
- 20)  Remove the electronic load from VOUT2 and PGND2 pads.
- 21)  Connect the positive terminal of the electronic load to the VOUT3 PCB pad. Connect the negative terminal of the electronic load to the PGND3 pad. Preset the electronic load to 3A.
- 22)  Verify that the voltage across the VOUT3 and PGND3 PCB pads is 1.8V ±2%.
- 23)  Verify that the voltage across the RESET3 and PGND PCB pads is 3.3V.
- 24)  Turn on the electronic load.
- 25)  Verify that the voltage across the VOUT3 and PGND3 PCB pads is in the range of 1.8V ±3%.
- 26) Turn off the electronic load.
- 27) Turn off the power supply.

## Detailed Description

The  MAX20014  EV  kit  integrates  three  high-efficiency, low-voltage  DC-DC converters: OUT1 is a synchronous boost  converter  that  boosts  a  3.3V  input  to  5.0V  at  up to 500mA, while two synchronous step-down converters (OUT2 , OUT3) provide adjustable output voltages down to  0.8V at up to 3A.

VOUT1-VOUT3 can be enabled/disabled by the EN1-EN3  jumpers,  respectively.  The  status  of  input voltage and output voltages is indicated by PV\_OV , and RESET1 -RESET3 .

## Adjustable Buck Output Voltage (VOUT2 and VOUT3 )

The buck outputs (V OUT2 , V OUT3 ) can be adjusted using the following procedure:

- 1) Choose R BOTTOM to be 100kΩ or less.
- 2) Solve for R TOP  using:

RTOP = R BOTTOM  x [(V OUT\_ /0.8V) - 1]

- 3) Install resistors R TOP  and R BOTTOM . R TOP  refers to R4/R6, while R BOTTOM  refers to R3/R5 in the EV kit schematic.
- 4) The  external  feedback  resistive  divider  must  be frequency compensated for proper operation. Place  a  capacitor  across  R TOP   in  the  resistivedivider  network.  Use  the  equation  below  to  determine  the  value  of  the  feed-forward  capacitor:

CFF = 50 x R BOTTOM /R TOP  pF

## Operation Mode

The EV kit features a jumper (SYNC1) to configure the device  operation  mode.  Install  a  shunt  on  SYNC1  to enter  FPWM  mode.  Remove  the  shunt  on  SYNC1  to enable skip mode under light-load conditions. Connect an external  clock  with  1.8MHz  to  2.6MHz  frequency  to synchronize  the  internal  oscillator  to  an  external  clock. Table 1 summarizes the functions of SYNC1.

## Enable Control (EN1-EN3 )

The  EN1-EN3  jumpers  are  used  to  enable  or  disable VOUT1, V OUT2 ,  and  V OUT3 ,  respectively.  Install  shunts on EN1, EN2, or EN3 to enable V OUT1 , V OUT2 , or V OUT3 normal operation. Remove shunts on EN1, EN2, or EN3 to enter shutdown mode. See Table 2 for enable control.

## Reset Outputs ( RESET1 -RESET3 )

The EV kit also include three RESET\_ outputs to monitor VOUT1, V OUT2 , and V OUT3  output status. The RESET\_ output becomes high impedance and is pulled to V SUP  when the  corresponding  output  voltage  is  within  the  specified UV/OV range. RESET\_ goes low when the corresponding output voltage is not within the specified UV/OV range.

## Table 1. Operation Mode (SYNC1)

| SHUNT POSITION                                | MODE                          |
|-----------------------------------------------|-------------------------------|
| ON                                            | FPWM                          |
| OFF                                           | Skip                          |
| OFF (an external clock connected to SYNC pad) | Synchronize to external clock |

## Table 2. Enable Control (EN1 -EN3)

| SHUNT POSITION   | MODE             |
|------------------|------------------|
| ON               | Normal Operation |
| OFF              | Shutdown         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20014EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX20014

│

## MAX20014 Evaluation Kit

## MAX20014 EV Kit Component List

| DESIGNATION               | QTY   | DESCRIPTION                                                                              |
|---------------------------|-------|------------------------------------------------------------------------------------------|
| C1                        | 1     | 10µF 16V X6S Ceramic Capacitor (0805)                                                    |
| C2, C3                    | 2     | 47µF 4V X6S Ceramic Capacitor (0805)                                                     |
| C4                        | 1     | 47µF 16V Aluminum Capacitor Panasonic EEEFC1C470P                                        |
| C7                        |       | TDK CGA5L3X7R1C475K160AB 1µF 16V X7R Ceramic Capacitor (0603)                            |
|                           | 1     | TDK C1608X7R1C105K080AC 0.33µF 16V X7R Ceramic Capacitor                                 |
| C8                        |       | (0603) TDK C1608X7R1C334K080AC                                                           |
| C9                        | 1 1   | 8pF 50V C0G Ceramic Capacitor (0603)                                                     |
| C10, C14 C11              | 0 1 1 | TDK CGA3E2C0G1H080D080AA Not Installed (0805) (0603)                                     |
| C12                       |       | 4.7µF 16V X6S Ceramic Capacitor Murata GRT188C81C475ME13D                                |
|                           |       | TDK CGA3E2X7R1H102K080AA 18pF 50V COG Ceramic Capacitor (0603)                           |
|                           |       | 0Ω 1% Resistor (0603)                                                                    |
| C13                       | 1     | TDK CGA3E2C0G1H180J080AA                                                                 |
| EN1, EN2, EN3, SYNC1, WDS | 5     | 2-Pin Header 0.1' Sullins: PEC36SAAN or Equivalent (36 PIN STRIP, CUT TO SIZE AS NEEDED) |
| L1 -                      | 1 5   | Shunt, 2 POSITION Sullins: STC02SYAN or Equivalent 2.2µH Inductor                        |
| L2, L3                    |       | TDK TFM252012ALMB2R2MTAA 0.47µH Inductor TDK TFM252012ALMBR47MTAA                        |
| R1                        | 1 2   | 10Ω 1% Resistor (0603) 11.3kΩ 1% Resistor (0603) 20kΩ 1% Resistor (0603)                 |
| R2 R3, R5, R9, R10, R11   | 1 5   |                                                                                          |
| R4, R7, R12 R6            | 3     | 0Ω 1% Resistor (0603) 24.9kΩ 1% Resistor (0603)                                          |
| R8                        | 1 0   | Not Installed (0603)                                                                     |
|                           | 1     | 2.2MHz Sync Boost and Dual Step-Down Converter                                           |
| U1                        |       | PMIC Maxim MAX20014ATGA/V+ (TQFN 4mm×4mm×0.75mm)                                         |
| ---                       | 1     |                                                                                          |
|                           |       | PCB: MAX20014 EVKIT                                                                      |

Evaluates: MAX20014

## MAX20014 EV Kit Schematic

<!-- image -->

## MAX20014 EV Kit Layout Diagrams

MAX20014  EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX20014 EV Kit Layout Diagrams (continued)

MAX20014 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX20014 EV Kit Layout Diagrams (continued)

MAX20014  EV Kit PCB Layout-Bottom Mask

<!-- image -->

## MAX20014 EV Kit Layout Diagrams (continued)

MAX20014  EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

Evaluates: MAX20014

## MAX20014 EV Kit Layout Diagrams (continued)

MAX20014  EV Kit PCB Layout-Bottom

<!-- image -->

## MAX20014 EV Kit Layout Diagrams (continued)

MAX20014  EV Kit PCB Layout-Top

<!-- image -->

│

## MAX20014 EV Kit Layout Diagrams (continued)

MAX20014  EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX20014 EV Kit Layout Diagrams (continued)

MAX20014  EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX20014 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                          | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------|-----------------|
|                 0 | 11/16           | Initial release                                                      | -               |
|                 1 | 4/18            | Updated the Adjustable Buck Output Voltage (VOUT2 and VOUT3) section | 2               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserYes the riJht to chanJe the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX20014