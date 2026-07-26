<!-- lastmod 2022-08-03 -->
## MAX20353 Evaluation Kit

## General Description

The MAX20353 evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX20353 wearable charge-management  solution  with  I 2 C  compatibility  for feature-rich, low-power wearable applications. The device includes  a  linear  battery  charger,  smart  power  selector, two ultra-low quiescent current buck regulators, a buckboost  regulator,  a  boost  regulator,  a  charge  pump,  two low-dropout  (LDO)  linear  regulators,  three  LED  current sinks, five GPIO pins, and an LRA/ERM compatible haptic driver with internal pattern storage.

Refer to the MAX20353 IC data sheet for detailed information regarding the operation and features of the device.

## Features

- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested
- I 2 C Serial Interface

## Quick Start

## Required Equipment

- GPIO controller device
- Adjustable power supply with 0V to 5V capability
- Digital multimeter (DMM)
- I 2 C controller device
- Cables with grabber connections

## Optional Equipment

- Second power supply for LDOs and load switches
- Electronic load
- 1 0 kΩ resistor

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify basic board operation:

Caution: Do not enable the power supply or external devices until all connections are made.

Ordering Information appears at end of data sheet.

Evaluates: MAX20353

- 1) Connect the GPIO controller device PFN1 (J2 pin 11). Set the output to low.

Optional: If a GPIO controller is unavailable, connect a 10kΩ pullup resistor from PFN1 to BAT (J1 pin 4).

- 2) Connect the I 2 C controller device to GND (J1 pins 1 and 12, J2 pins 1 and 12), SDA (J2 pin 6) and SCL (J2 pin 7).
- 3) Set the power supply voltage to 3.7V and turn off the supply.
- 4) Connect the positive terminal of the 3.7V to V BAT and the negative terminal to GND.
- 5) Turn on the 3.7V power supply.
- 6) Turn on the GPIO controller device and the I 2 C controller device.
- 7) Set the GPIO controller output high to enable the MAX20353.
- 8) Measure the voltage on SYS (J1 pin 3 and J5 pin 1) and confirm it equals V BAT . If the SYS voltage is less than 2.7V, set the GPIO controller low for three seconds, then set it back to high. Optional:
8. If using a 10kΩ pullup from PFN1 to BAT , short PFN1 to GND for three seconds, then release the short.
- 9) To enable Buck1, use the I 2 C controller to set Buck1En[1:0] = 01.
- 10) Write the values 0x04 to register 0x0F, 0x90 to register 0x10, 0x16 to register 0x11, and 0x01 to register 0x12.
- 11)  Write the value 0x35 to register 0x17.
- 12) Measure BK1OUT (J3 pin 6) and confirm it is 1.2V.
- 13)  To enable Buck2, use the I 2 C controller to set Buck1En[1:0] = 01.
- 14)  Write the values 0x00 to register 0x0F, 0x94 to register 0x10, 0x26 to register 0x11, and 0x01 to register 0x12.
- 15)  Write the value 0x3A to register 0x17.
- 16) Measure BK2OUT (J3 pin 5) and confirm it is 1.8V.
- 17) To configure the other switching regulators and LDOs, refer to the MAX20353 IC data sheet for information regarding the AP interface. Use the optional second power supply as the input to LDOs and switches.
- 18)  The EV kit is ready for additional evaluation.

## Detailed Description of Hardware

The  MAX20353  EV  kit  evaluates  the  MAX20353  wearable  charge-management  solution.  The  default  settings of the EV kit differ from other versions of the IC to allow for flexible evaluation. Refer to Tables 1 through Table 3 for descriptions of the default settings and the readback values of the direct registers and AP registers on reset.

<!-- image -->

Table 1. Register Bit Default Values

| REGISTER BITS   | DEFAULT VALUE MAX20353A   |
|-----------------|---------------------------|
| PFN2PUD_CFG*    | Hi-Z                      |
| PFN1PUD_CFG*    | PU/PD Connected           |
| WriteProtect    | Disabled                  |
| ILimBlank       | Disabled                  |
| ILimCntl        | 500mA                     |
| MtChgTmr        | 0min                      |
| FChgTmr         | 600min                    |
| PChgTmr         | 30min                     |
| TShdnTmo        | 10s                       |
| ChgAutoRe       | Auto-Restart              |
| VPChg           | 3.15V                     |
| IPChg           | 10% IFCHG                 |
| ChgDone         | 10% IFCHG                 |
| ChgEn           | Disabled                  |
| ChgAutoStp      | Enabled                   |
| BatReChg        | 200mV                     |
| BatReg          | 4.35V                     |
| ColdLim         | 1397.65mV                 |
| HotLim          | 529.41mV                  |
| BstISet         | 425mA                     |
| BstIAdptEn      | Enabled                   |
| BstFastStrt     | 50ms                      |
| BstFetScale     | Disabled                  |
| BstVSet         | 20V                       |
| Buck1FetScale   | Disabled                  |
| Buck2FetScale   | Disabled                  |
| BstSeq          | BstEn After 100%          |
| BstEn           | Disabled                  |
| Buck1VSet       | 1.8V                      |
| Buck1IZCSet     | 30mA                      |
| Buck2VSet       | 0.9V                      |
| Buck2IZCSet     | 10mA                      |
| Buck2ISet       | 150mA                     |
| Buck1ISet       | 150mA                     |
| BootDly**       | 120ms                     |
| Buck2SftStrt    | 50ms Soft-Start           |
| Buck1SftStrt    | 50ms Soft-Start           |

Evaluates: MAX20353

| REGISTER BITS   | DEFAULT VALUE MAX20353A   |
|-----------------|---------------------------|
| Buck2En         | Disabled                  |
| Buck1En         | Enabled                   |
| LDO1Md          | LDO                       |
| LDO1En          | Disabled                  |
| LDO2Md          | LDO                       |
| LDO2En          | Disabled                  |
| PassDiscEna***  | Enabled                   |
| LDO2VSet        | 3.2V                      |
| StayOn          | Enabled                   |
| SFOUTVSet       | 3.3V                      |
| LDO1VSet        | 1.2V                      |
| SysMinVlt       | 3.6V                      |
| SFOUTEn         | CHGIN                     |
| CPVSet          | 6.6V                      |
| CPEn            | Disabled                  |
| CPSeq           | CPEn After 100%           |
| PwrRstCfg       | 0b0110                    |
| Buck2Seq        | Buck2En After 100%        |
| Buck1Seq        | Buck1En After 100%        |
| BBstEn          | Disabled                  |
| LDO2Seq         | LDO2En After 100%         |
| LDO1Seq         | LDO1En After 100%         |
| ThmEn           | Disabled                  |
| BBstVset        | 5V                        |
| BBstISet        | 100mA                     |
| BatOcThr        | 1000mA                    |
| BBstRipRed      | Lower Ripple              |
| BBstInd         | 4.7µH                     |
| BBstSeq         | BBstEn After 100%         |
| EmfEn           | Disabled                  |
| HptSel          | ERM                       |
| AlcMod          | Enabled                   |
| HptSysUVLO      | 3V                        |
| HptDrvTmo       | 10s                       |
| ILimMax****     | 1000mA                    |
| T CHGIN_SHDN    | 100°C                     |

Table 2. I 2 C Direct Register Default Values

| REGISTER   | NAME        | DEFAULT VALUE   |
|------------|-------------|-----------------|
| 0x00       | HardwareID  | 0x02            |
| 0x01       | FirmwareID  | 0x02            |
| 0x0B       | SystemError | 0x00            |
| 0x0C       | IntMask0    | 0x00            |
| 0x0D       | IntMask1    | 0x00            |
| 0x0E       | IntMask2    | 0x40            |
| 0x0F       | APDataOut0  | 0x00            |
| 0x10       | APDataOut1  | 0x00            |
| 0x11       | APDataOut2  | 0x00            |
| 0x12       | APDataOut3  | 0x00            |
| 0x13       | APDataOut4  | 0x00            |
| 0x14       | APDataOut5  | 0x00            |
| 0x15       | APDataOut6  | 0x00            |
| 0x17       | APCmdOut    | 0x00            |
| 0x18       | APResponse  | 0x00            |
| 0x19       | APDataIn0   | 0x00            |
| 0x1A       | APDataIn1   | 0x00            |
| 0x1B       | APDataIn2   | 0x00            |

Evaluates: MAX20353

| REGISTER   | NAME           | DEFAULT VALUE   |
|------------|----------------|-----------------|
| 0x1C       | APDataIn3      | 0x00            |
| 0x1D       | APDataIn4      | 0x00            |
| 0x1E       | APDataIn5      | 0x00            |
| 0x20       | LDODirect      | 0x00            |
| 0x21       | MPCDirectWrite | 0x00            |
| 0x28       | HptRAMAddr     | 0x00            |
| 0x29       | HptRAMDataH    | 0x4A            |
| 0x2A       | HptRAMDataM    | 0x74            |
| 0x2B       | HptRAMDataL    | 0x63            |
| 0x2C       | LEDStepDirect  | 0x00            |
| 0x2D       | LED0Direct     | 0x00            |
| 0x2E       | LED1Direct     | 0x00            |
| 0x2F       | LED2Direct     | 0x00            |
| 0x30       | HptDirect0     | 0x04            |
| 0x31       | HptDirect1     | 0x00            |
| 0x32       | HptRTI2Camp    | 0x00            |
| 0x33       | HptPatRAMAddr  | 0x00            |

See Table 3 through Table 7 for pin descriptions of the three connectors J1-J5.

Table 3. Read Opcode Default Values

| OPCODE                   | REGISTER   | DEFAULT VALUE MAX20353A   |
|--------------------------|------------|---------------------------|
| GPIO_Config_Read (0x02)  | APDataIn0  | 0x00                      |
| GPIO_Config_Read (0x02)  | APDataIn1  | 0x00                      |
| GPIO_Config_Read (0x02)  | APDataIn2  | 0x00                      |
| GPIO_Config_Read (0x02)  | APDataIn3  | 0x00                      |
| GPIO_Config_Read (0x02)  | APDataIn4  | 0x00                      |
| GPIO_Control_Read (0x04) | APDataIn0  | 0x00                      |
| MPC_Config_Read (0x07)   | APDataIn0  | 0x00                      |
| MPC_Config_Read (0x07)   | APDataIn1  | 0x00                      |
| MPC_Config_Read (0x07)   | APDataIn2  | 0x00                      |
| MPC_Config_Read (0x07)   | APDataIn3  | 0x00                      |
| MPC_Config_Read (0x07)   | APDataIn4  | 0x00                      |

| OPCODE                                   | REGISTER   | DEFAULT VALUE MAX20353A   |
|------------------------------------------|------------|---------------------------|
| InputCurrent_Config_ Read (0x11)         | APDataIn0  | 0x06                      |
| ThermalShutdown_ Config_Read (0x12)      | APDataIn0  | 0x03                      |
| Charger_Config_Read (0x15)               | APDataIn0  | 0x0C                      |
| Charger_Config_Read (0x15)               | APDataIn1  | 0x75                      |
| Charger_Config_Read (0x15)               | APDataIn2  | 0xF6                      |
| Charger_Config_Read (0x15)               | APDataIn3  | 0x00                      |
| ChargerThermalLimits _Config_Read (0x17) | APDataIn0  | 0xC6                      |
| ChargerThermalLimits _Config_Read (0x17) | APDataIn1  | 0x00                      |
| ChargerThermalLimits _Config_Read (0x17) | APDataIn2  | 0x00                      |
| ChargerThermalLimits _Config_Read (0x17) | APDataIn3  | 0x4B                      |

│

Table 3. Read Opcode Default Values (continued)

| OPCODE                                | REGISTER   | DEFAULT VALUE   |
|---------------------------------------|------------|-----------------|
|                                       |            | MAX20353A       |
| ChargerThermalReg_ ConfigRead (0x19)  | APDataIn0  | 0x00            |
| ChargerThermalReg_ ConfigRead (0x19)  | APDataIn1  | 0x00            |
| ChargerThermalReg_ ConfigRead (0x19)  | APDataIn2  | 0x1F            |
| ChargerThermalReg_ ConfigRead (0x19)  | APDataIn3  | 0x00            |
| ChargerThermalReg_ ConfigRead (0x19)  | APDataIn4  | 0x00            |
| Charger_Control_ Read (0x1B)          | APDataIn0  | 0x00            |
| Charger_JEITAHyst_ ControlRead (0x1D) | APDataIn0  | 0x86            |
| Bst_Config_Read (0x31)                | APDataIn0  | 0x00            |
| Bst_Config_Read (0x31)                | APDataIn1  | 0x06            |
| Bst_Config_Read (0x31)                | APDataIn2  | 0x0D            |
| Bst_Config_Read (0x31)                | APDataIn3  | 0x3C            |
| Bst_Config_Read (0x31)                | APDataIn4  | 0x00            |
| Buck1_Config_Read (0x36)              | APDataIn0  | 0x00            |
| Buck1_Config_Read (0x36)              | APDataIn1  | 0xA8            |
| Buck1_Config_Read (0x36)              | APDataIn2  | 0x26            |
| Buck1_Config_Read (0x36)              | APDataIn3  | 0x01            |
| Buck1_Config_Read (0x36)              | APDataIn4  | 0x07            |
| Buck2_Config_Read (0x3B)              | APDataIn0  | 0x00            |
| Buck2_Config_Read (0x3B)              | APDataIn1  | 0x82            |
| Buck2_Config_Read (0x3B)              | APDataIn2  | 0x06            |
| Buck2_Config_Read (0x3B)              | APDataIn3  | 0x00            |
| Buck2_Config_Read (0x3B)              | APDataIn4  | 0x07            |
| LDO1_Config_Read (0x41)               | APDataIn0  | 0x00            |
|                                       | APDataIn1  | 0x1C            |
|                                       | APDataIn2  | 0x07            |
| LDO2_Config_Read (0x43)               | APDataIn0  | 0x00            |
| LDO2_Config_Read (0x43)               | APDataIn1  | 0x17            |
| LDO2_Config_Read (0x43)               | APDataIn2  | 0x07            |
| ChargePump_Config_ Read (0x47)        | APDataIn0  | 0x00            |
|                                       | APDataIn1  | 0x00            |
|                                       | APDataIn2  | 0x07            |
| SFOUT_Config_Read (0x49)              | APDataIn0  | 0x05            |

| OPCODE                                | REGISTER   | DEFAULT VALUE MAX20353A   |
|---------------------------------------|------------|---------------------------|
| MONMux_Config_ Read (0x51)            | APDataIn0  | 0x00                      |
| BBst_Config_Read (0x71)               | APDataIn0  | 0x00                      |
| BBst_Config_Read (0x71)               | APDataIn1  | 0x02                      |
| BBst_Config_Read (0x71)               | APDataIn2  | 0x19                      |
| BBst_Config_Read (0x71)               | APDataIn3  | 0x50                      |
| BBst_Config_Read (0x71)               | APDataIn4  | 0x07                      |
| Hpt_Config_Read0 (0xA1)               | APDataIn0  | 0x02                      |
| Hpt_Config_Read0 (0xA1)               | APDataIn1  | 0xD0                      |
| Hpt_Config_Read0 (0xA1)               | APDataIn2  | 0x97                      |
| Hpt_Config_Read0 (0xA1)               | APDataIn3  | 0x00                      |
| Hpt_Config_Read0 (0xA1)               | APDataIn4  | 0x05                      |
| Hpt_Config_Read0 (0xA1)               | APDataIn5  | 0x01                      |
| Hpt_Config_Read1 (0xA3)               | APDataIn0  | 0x01                      |
| Hpt_Config_Read1 (0xA3)               | APDataIn1  | 0x00                      |
| Hpt_Config_Read1 (0xA3)               | APDataIn2  | 0x02                      |
| Hpt_Config_Read1 (0xA3)               | APDataIn3  | 0x8B                      |
| Hpt_Config_Read1 (0xA3)               | APDataIn4  | 0x7F                      |
| Hpt_Config_Read1 (0xA3)               | APDataIn5  | 0x04                      |
| Hpt_Config_Read2 (0xA5)               | APDataIn0  | 0xCC                      |
| Hpt_Config_Read2 (0xA5)               | APDataIn1  | 0x32                      |
| Hpt_Config_Read2 (0xA5)               | APDataIn2  | 0xFF                      |
| Hpt_Config_Read2 (0xA5)               | APDataIn3  | 0x04                      |
| Hpt_Config_Read2 (0xA5)               | APDataIn4  | 0x24                      |
| Hpt_Config_Read2 (0xA5)               | APDataIn5  | 0x06                      |
| Hpt_SYS_Threshold_ Config_Read (0xA7) | APDataIn0  | 0x8B                      |
| Hpt_Lock_Config_ Read (0xA9)          | APDataIn0  | 0x00                      |
| Hpt_EMF_Threshold_ Config_Read (0xAB) | APDataIn0  | 0x19                      |

│

Evaluates: MAX20353

## MAX20353 Evaluation Kit

## Table 4. Connector J1

|   PIN | SIGNAL   | DESCRIPTION                                                                      |
|-------|----------|----------------------------------------------------------------------------------|
|     1 | GND      | Ground                                                                           |
|     2 | CHGIN    | +28V/-5.5V Protected Charger Input                                               |
|     3 | SYS      | System Load Connection                                                           |
|     4 | BAT      | Battery Connection                                                               |
|     5 | THM      | Battery Thermistor Measurement Connection                                        |
|     6 | TPU      | Battery Temperature Thermistor Measurement Pullup. Do not exceed 1mAload on TPU. |
|     7 | SET      | External Resistor For Battery Charge Current Level Setting                       |
|     8 | LED0     | Current Sink Output 0                                                            |
|     9 | LED1     | Current Sink Output 1                                                            |
|    10 | LED2     | Current Sink Output 2                                                            |
|    11 | BSTOUT   | Boost Regulator Output                                                           |
|    12 | GND      | Ground                                                                           |

## Table 5. Connector J2

|   PIN | SIGNAL   | DESCRIPTION                                  |
|-------|----------|----------------------------------------------|
|     1 | GND      | Ground                                       |
|     2 | MON      | Monitor Multiplexer Output                   |
|     3 | ALRT     | Fuel Gauge Alert Output                      |
|     4 | INT      | Interrupt Open-Drain Output                  |
|     5 | RST      | Reset Output. Active-Low, Open-Drain Output  |
|     6 | SDA      | I 2 C Serial Data Input/Open-Drain Output    |
|     7 | SCL      | I 2 C Serial Clock Input                     |
|     8 | MPC1     | Multipurpose Control I/O 1                   |
|     9 | MPC0     | Multipurpose Control I/O 0                   |
|    10 | PFN2     | Configurable Power Mode Control Pin ( KOUT ) |
|    11 | PFN1     | Configurable Power Mode Control PIN ( KIN )  |
|    12 | GND      | Ground                                       |

│

Evaluates: MAX20353

## Table 6. Connector J3

|   PIN | SIGNAL   | DESCRIPTION                 |
|-------|----------|-----------------------------|
|     1 | CELL     | Fuel Gauge Voltage          |
|     2 | N.C.     | Not Connected               |
|     3 | CPOUT    | Charge Pump Output          |
|     4 | SFOUT    | Safe Out LDO                |
|     5 | BK2OUT   | Buck2 Regulator Output      |
|     6 | BK1OUT   | Buck1 Regulator Output      |
|     7 | N.C.     | Not Connected               |
|     8 | BBOUT    | Buck-Boost Regulator Output |

## Table 7. Connector J4

|   PIN | MAX20353   | DESCRIPTION                           |
|-------|------------|---------------------------------------|
|     1 | DRP        | ERM/LRA Haptic Driver Positive Output |
|     2 | DRN        | ERM/LRA Haptic Driver Negative Output |
|     3 | L1IN       | LDO1 Input                            |
|     4 | L1OUT      | LDO1 Output                           |
|     5 | L2IN       | LDO2 Input                            |
|     6 | L2OUT      | LDO2 Output                           |
|     7 | VDIG       | Internal Reference Supply             |
|     8 | CAP        | Internal Reference Supply             |

## Table 8. Connector J5

|   PIN | MAX20353   | DESCRIPTION                      |
|-------|------------|----------------------------------|
|     1 | SYS        | System Load Connection           |
|     2 | N.C.       | Not Connected                    |
|     3 | N.C.       | Not Connected                    |
|     4 | N.C.       | Not Connected                    |
|     5 | N.C.       | Not Connected                    |
|     6 | MPC4       | Multipurpose Configuration I/O 4 |
|     7 | MPC3       | Multipurpose Configuration I/O 3 |
|     8 | MPC2       | Multipurpose Configuration I/O 2 |

## Component Suppliers

| SUPPLIER        | WEBSITE              |
|-----------------|----------------------|
| Murata Americas | www.murata.com/en-us |

Note: Indicate that you are using the MAX20353 when contacting these component suppliers.

Evaluates: MAX20353

│

## MAX20353 EV Kit Bill of Materials

| ITEM   | REF_DES                     |   QTY | MFG PART #                                                                                    | MANUFACTURER                            | VALUE      | DESCRIPTION                                                                                                                                 | COMMENTS   |
|--------|-----------------------------|-------|-----------------------------------------------------------------------------------------------|-----------------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2, C5, C10, C11        |     5 | C1005X5R1V225M050BC                                                                           | TDK                                     | 2.2UF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 35V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                   |            |
| 2      | C3, C4, C6, C8, C15         |     5 | C1005X5R0J475K050BC                                                                           | TDK                                     | 4.7UF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                  |            |
| 3      | C7                          |     1 | C0402C273K4RAC                                                                                | KEMET                                   | 0.027UF    | CAPACITOR; SMT; 0402; CERAMIC; 0.027uF; 16V; 10%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.                                             |            |
| 4      | C9, C13, C14, C16, C18, C19 |     6 | GRM155R60J226ME11                                                                             | MURATA                                  | 22UF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ;                                                                          |            |
| 5      | C12, C20                    |     2 | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13 | TDK;SAMSUNG ELECTRONICS; MURATA;;MURATA | 10UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                    |            |
| 6      | C17                         |     1 | GRM155R71A104KA01; C1005X7R1A104K050BB; C0402C104K8RAC                                        | MURATA;TDK;KEMET                        | 0.1UF      | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R;                               |            |
| 7      | J1, J2                      |     2 | TS-112-T-A                                                                                    | SAMTEC                                  | TS-112-T-A | CONNECTOR; MALE; THROUGH HOLE; PRECISION MACHINED TERMINAL STRIP; STRAIGHT; 12PINS                                                          |            |
| 8      | J3-J5                       |     3 | TS-108-T-A                                                                                    | SAMTEC                                  | TS-108-T-A | CONNECTOR; MALE; THROUGH HOLE; PRECISION MACHINED TERMINAL STRIP; STRAIGHT; 8PINS                                                           |            |
| 9      | L1, L4                      |     2 | DFE201610E-4R7M=P2                                                                            | MURATA                                  | 4.7UH      | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 4.7UH; TOL=+/-20%; 1.3A                                                                             |            |
| 10     | L2, L3                      |     2 | DFE201612E-2R2M                                                                               | MURATA                                  | 2.2UH      | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                               |            |
| 11     | R1                          |     1 | RCC-0402PW1001F                                                                               | INTERNATIONAL MANUFACTURING SERVICE     | 1K         | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.080W; THICK FILM                                                                                      |            |
| 12     | R3                          |     1 | ERJ-2RKF3902X; CRCW040239K0FK                                                                 | PANASONIC;VISHAY DALE                   | 39K        | RESISTOR, 0402, 39K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                    |            |
| 13     | U1                          |     1 | MAX20353                                                                                      | MAXIM                                   | MAX20353   | EVKIT PART- IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE; WLP 56 PINS; 0.5MM PITCH; PKG. CODE: W563A4+1; PKG. OUTLINE: 21-100104 |            |
| 14     | PCB                         |     1 | MAX20353                                                                                      | MAXIM                                   | PCB        | PCB:MAX20353                                                                                                                                |            |
| TOTAL  |                             |    33 |                                                                                               |                                         |            |                                                                                                                                             |            |

Evaluates: MAX20353

## MAX20353 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX20353

## MAX20353 EV Kit PCB Layout

MAX20353 EV Kit-Top Silkscreen

<!-- image -->

MAX20353 EV Kit-Top Copper

<!-- image -->

MAX20353 EV Kit-GND Plane

<!-- image -->

MAX20353 EV Kit-System Plane

<!-- image -->

│

## MAX20353 EV Kit PCB Layout (continued)

MAX20353 EV Kit-Bottom Copper

<!-- image -->

MAX20353 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20353EVKIT# | EV Kit |

#Denotes RoHS Compliant

Evaluates: MAX20353

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20353